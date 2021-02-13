import React, {useEffect} from 'react';
import './main.scss';
import {Switch, Route, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Auth from './components/Auth/Auth';
import Main from './components/Main/Main';
import {connect} from 'react-redux';
import {checkAuth, login, logout, register, setResponseMessage} from './redux/authReducer';
import PrivateRoute from './HOC/PrivateRoute';
import Register from './components/Auth/Register';
import Preloader from './common/Preloader/Preloader';



function App(props) {
    useEffect(() => {
        props.checkAuth()
    },[])
    if (!props.initialized) {
        return <div className='preloader'><Preloader/></div>
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
                    <PrivateRoute exact path='/' component={() => <Main logout={props.logout}/> }/>
                </Switch>
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => ({
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
        logout
    })
)(App)