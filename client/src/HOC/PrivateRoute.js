import React, {useEffect} from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, isAuth, checkAuth, ...rest}) => {
    return (
    <Route
        {...rest}
        render={ props =>
            isAuth
            ? <Component {...props}/>
            : <Redirect to='/login'/>
        } />
)}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default compose(
withRouter,
connect(mapStateToProps)
)(PrivateRoute)
