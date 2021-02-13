import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import calendarReducer from "./calendarReducer";

let reducers = combineReducers( {
    app: appReducer,
    auth: authReducer,
    calendar: calendarReducer
})

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(thunkMiddleware)))

export default store