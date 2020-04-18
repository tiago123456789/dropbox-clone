import React, { Component } from "react";
import "../assets/css/login.css";
import FirebaseAuth from "../services/FirebaseAuth";
import CONSTANTS from "../constantes/App";
import NotificationService from "../services/Notification";
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../assets/css/toastr.min.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "", password: ""
        }
        this.changeValueInput = this.changeValueInput.bind(this);
        this.submit = this.submit.bind(this);
        this._firebaseAuthService = new FirebaseAuth();
    }

    changeValueInput(key, value) {
        this.setState({ [key]: value });
    }

    submit(event) {
        event.preventDefault();
        this._firebaseAuthService
            .signUp(this.state.email, this.state.password)
            .then(() => {
                NotificationService.success("User register success!");
                this.props.history.push("/auth")
            })
            .catch((error) => {
                NotificationService.error(error.message);
            });
    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first" style={{ "margin-top": "15px"}}>
                        <svg className="maestro-nav__logo" aria-label="Início" xmlns="http://www.w3.org/2000/svg" role="img" width="32px" height="32px"
                            viewBox="0 0 32 32" style={{ "fill": "#0062ff" }}>
                            <title></title>
                            <path d="M8 2.4l8 5.1-8 5.1-8-5.1 8-5.1zm16 0l8 5.1-8 5.1-8-5.1 8-5.1zM0 17.7l8-5.1 8 5.1-8 5.1-8-5.1zm24-5.1l8 5.1-8 5.1-8-5.1 8-5.1zM8 24.5l8-5.1 8 5.1-8 5.1-8-5.1z"
                                data-reactid="14"></path>
                        </svg>
                    </div>
        
                    <form>
                        <input type="text" id="login" 
                            className="fadeIn second" name="login" 
                            placeholder="login" value={this.state.email} 
                            onChange={event => this.changeValueInput("email", event.target.value)}
                            />
                        <input type="password" id="password"
                             className="fadeIn third" name="login" 
                             placeholder="password" value={this.state.password}
                             onChange={event => this.changeValueInput("password", event.target.value)}
                             />
                        <input type="submit" className="fadeIn fourth" value="Register"
                         onClick={this.submit}/>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;