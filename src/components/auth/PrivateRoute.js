import React from "react";
import FirebaseAuthService from "../../services/FirebaseAuth";
import { Redirect, Route } from "react-router-dom";

const firebaseAuthService = new FirebaseAuthService();

export default ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (       
        firebaseAuthService.isAuthenticated() == true
        ? <Component {...props} />
        : <Redirect to='/auth' />
     )} />
)