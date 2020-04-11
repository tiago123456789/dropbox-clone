import React from "react";
import { Link } from "react-router-dom";
import FirebaseAuth from "../services/FirebaseAuth";

const firebaseAuthService = new FirebaseAuth();

export default (props) => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div id="logo-dropbox">
                <Link to="/home" className="maestro-nav__home-button" >
                    <svg className="maestro-nav__logo" aria-label="Início" xmlns="http://www.w3.org/2000/svg" role="img" width="32px" height="32px"
                        viewBox="0 0 32 32" style={{ "fill": "#0062ff" }}>
                        <title></title>
                        <path d="M8 2.4l8 5.1-8 5.1-8-5.1 8-5.1zm16 0l8 5.1-8 5.1-8-5.1 8-5.1zM0 17.7l8-5.1 8 5.1-8 5.1-8-5.1zm24-5.1l8 5.1-8 5.1-8-5.1 8-5.1zM8 24.5l8-5.1 8 5.1-8 5.1-8-5.1z"
                            data-reactid="14"></path>
                    </svg>
                    <svg className="maestro-nav__caret" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" data-reactid="15">
                        <title data-reactid="16">Left Arrow</title>
                        <g id="arrow" transform="translate(-32.000000, -32.000000)" data-reactid="17">
                            <g id="arrow-left" transform="translate(32.000000, 32.000000)" data-reactid="18">
                                <polygon id="Combined-Shape" points="12.9497475 7.05000305 8 11.9997505 12.9497475 16.949498 14.363961 15.5352844 10.8284271 11.9997505 14.363961 8.46421661"
                                    data-reactid="19"></polygon>
                            </g>
                        </g>
                    </svg>
                </Link>
            </div>

            <div className="sidebar-sticky">
                <div className="maestro-nav__contents">
                    <ul className="maestro-nav__features" data-reactid="21">
                        <li data-reactid="25">
                            <div className="maestro-nav__feature-wrap" data-reactid="26">
                                <span className="ue-effect-container uee-FeatureNav-myFiles" data-reactid="27">
                                    <Link to="/home" className="maestro-nav__feature maestro-nav__active-feature" data-reactid="28">
                                        Meus arquivos
                                        </Link>
                                </span>
                            </div>
                        </li>
                        <li data-reactid="40">
                            <div className="maestro-nav__feature-wrap" data-reactid="41">
                                <span className="ue-effect-container uee-FeatureNav-deletedFiles" data-reactid="42">
                                    <Link to="/file-trashed" className="maestro-nav__feature" data-reactid="43">
                                        Arquivos excluídos
                                    </Link>
                                </span>
                            </div>
                        </li>
                        <li data-reactid="40">
                            <div className="maestro-nav__feature-wrap" data-reactid="41">
                                <span className="ue-effect-container uee-FeatureNav-deletedFiles" data-reactid="42">
                                    <Link to="/auth" onClick={() => firebaseAuthService.logout()} className="maestro-nav__feature" data-reactid="43">
                                        Logout
                                    </Link>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="maestro-nav-footer" data-reactid="45">
                <div className="ue-effect-container uee-FooterNav-NavSwitcher" data-reactid="46">
                    <div className="maestro-nav-switcher" data-reactid="47">
                        <span role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" className="maestro-nav-switcher-button" data-reactid="48">
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}