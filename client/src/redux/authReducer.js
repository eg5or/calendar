import {authAPI} from '../API/api'
import {initializeApp} from './appReducer';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const DELETE_AUTH_USER_DATA = 'DELETE_AUTH_USER_DATA';
const SET_RESPONSE_MESSAGE = 'SET_RESPONSE_MESSAGE';

let initialState = {
    isAuth: false,
    token: '',
    name: '',
    email: '',
    id: '',
    textResponseMessage: null,
    typeResponseMessage: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                isAuth: true,
                id: action.data.id,
            };
        case DELETE_AUTH_USER_DATA:
            return {
                ...state,
                isAuth: false,
                token: '',
                name: '',
                email: '',
                id: '',
            };
        case SET_RESPONSE_MESSAGE:
            return {
                ...state,
                textResponseMessage: action.message,
                typeResponseMessage: action.typeMessage
            };

        default:
            return state;
    }
};

// ActionCreators

export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data});

export const deleteAuthUserData = () => ({type: DELETE_AUTH_USER_DATA});

export const setResponseMessage = (message, typeMessage) => ({type: SET_RESPONSE_MESSAGE, message, typeMessage});


// Thunks
export const checkAuth = () => async (dispatch, getState) => {
    const isAuth = getState().auth.isAuth
    if (!isAuth) {
        if (localStorage.getItem('token')) {
            const userDataLocalStorage = JSON.parse(localStorage.getItem('token'))
            try {
                const me = await authAPI.checkAuth(userDataLocalStorage.id, userDataLocalStorage.token)
                if (me.statusText === 'OK') {
                    dispatch(setAuthUserData(me.data))
                    dispatch(initializeApp(true))
                }
            } catch (e) {
                if(e.response.status === 401) {
                    localStorage.removeItem('token')
                    dispatch(deleteAuthUserData())
                    dispatch(initializeApp(true))
                }
                return Promise
            }
        } else {
            dispatch(initializeApp(true))
        }
    } else {
        dispatch(initializeApp(true))
    }
};

export const login = (email, password) => async (dispatch) => {
    dispatch(setResponseMessage(null, null))
    const response = await authAPI.loginToSite(email, password).catch((err) => err.response.data)
    if (response.statusText === 'OK') {
        dispatch(setAuthUserData(response.data))
        console.log(response.data)
        localStorage.setItem('token', JSON.stringify({
            isAuth: true,
            token: response.data.token,
            id: response.data.id
        }))
    } else {
        dispatch(setResponseMessage(response.message, 'error'))
    }
}

export const register = (name, email, password) => async (dispatch) => {
    dispatch(setResponseMessage(null, null))
    const response = await authAPI.registerNewUser(name, email, password).catch((err) => err.response.data)
    console.log('register', response)
    if (response.statusText === 'Created') {
        dispatch(setResponseMessage('Вы успешно зарегистрировались!', 'success'))
    } else {
        dispatch(setResponseMessage(response.message, 'error'))
    }
}

export const logout = () => async (dispatch) => {
    dispatch(deleteAuthUserData())
    localStorage.removeItem('token')
}

/*export const changePasswordToNew = (newPassword) => async (dispatch, getState) => {
    const id = getState().authBlock._id
    const data = await authAPI.changePassword(id, newPassword).catch((err) => err.response.data)
    if (data.status === 201) {
        dispatch(setResponseMessage(data.data.message, 'inform'))
    } else {
        dispatch(setResponseMessage(data.data.message, 'error'))
    }
}*/

export default authReducer;