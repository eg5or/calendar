import React, {useEffect} from 'react';
import './main.scss';
import {Switch, Route, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PrivateRoute from './HOC/PrivateRoute';
import {checkAuth, login, logout, register, setResponseMessage} from './redux/authReducer';
import {setFirstDay} from './redux/calendarReducer';
import Register from './components/Auth/Register';
import Preloader from './common/Preloader/Preloader';
import Auth from './components/Auth/Auth';
import Main from './components/Main/Main';



function App(props) {
    useEffect(() => {
        props.checkAuth()
    },[])
    if (!props.initialized) {
        return <div className='loaderWrap'><Preloader/></div>
    }
    return (
        <div className='app-wrapper'>
            <Switch>
                <Route path='/login' component={() => <Auth isAuth={props.isAuth}
                                                            login={props.login}

                />}/>
                <Route path='/register' component={() => <Register
                                                                    register={props.register}
                                                                    setResponseMessage={props.setResponseMessage}
                                                                    textResponseMessage={props.textResponseMessage}
                                                                    typeResponseMessage={props.typeResponseMessage}
                />}/>
                <Switch>
                    <PrivateRoute exact path='/' component={() => <Main logout={props.logout}
                                                                        setFirstDay={props.setFirstDay}
                                                                        firstDay={props.firstDay}
                    /> }/>
                </Switch>
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => ({
    firstDay: state.calendar.firstDay,
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
    textResponseMessage: state.auth.textResponseMessage,
    typeResponseMessage: state.auth.typeResponseMessage,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {
        login,
        register,
        setResponseMessage,
        checkAuth,
        logout,
        setFirstDay
    })
)(App)