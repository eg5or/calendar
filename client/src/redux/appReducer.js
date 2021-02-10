// constants
const INITIALIZE_APP = 'calendar/app/INITIALIZE_APP'

// state
let initialState = {
    initialized: false
}

// cases
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                initialized: action.bool
            }
        default:
            return state
    }
}

// actioncreators
export const initializeApp = (bool) => ({type: INITIALIZE_APP, bool})

// thunks

export default appReducer