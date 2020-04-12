import React, { Component } from "react";
import FilesTrashed from "./pages/FilesTrashed";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import {
    HashRouter as Router,
    Switch, Route, Link, Redirect
} from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <PrivateRoute path="/home" component={Home} />
                    <PrivateRoute path="/file-trashed" component={FilesTrashed} />
                    <Route path="/auth" component={Login} />
                    <Route path="/register" component={UserRegister} />
                    <Redirect from='*' to='/auth' />
                </Switch>
            </Router>
        )
    }
}
export default App;