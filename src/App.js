import React, { Component } from "react";
import FilesTrashed from "./pages/FilesTrashed";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import {
    HashRouter as Router,
    Switch, Route, Link, Redirect
} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/file-trashed" component={FilesTrashed} />
                    <Route path="/auth" component={Login} />  
                    <Route path="/register" component={UserRegister} />  
                    <Redirect from='*' to='/auth' />
                </Switch>
            </Router>
        )
    }
}
export default App;