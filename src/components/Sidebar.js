import React from "react"

export default (props) => (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">

                <div id="logo-dropbox">
                    <a className="maestro-nav__home-button" href="#">
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
                    </a>
                </div>

                <div className="sidebar-sticky">
                    <div className="maestro-nav__contents">
                        <ul className="maestro-nav__features" data-reactid="21">
                            <li data-reactid="22">
                                <h2 className="maestro-nav__features-header" data-reactid="23">
                                    <a href="#" className="maestro-nav__features-header-link" data-reactid="24">Arquivos</a>
                                </h2>
                            </li>
                            <li data-reactid="25">
                                <div className="maestro-nav__feature-wrap" data-reactid="26">
                                    <span className="ue-effect-container uee-FeatureNav-myFiles" data-reactid="27">
                                        <a href="#" className="maestro-nav__feature maestro-nav__active-feature" data-reactid="28">
                                            Meus arquivos
                                        </a>
                                    </span>
                                </div>
                            </li>
                            <li data-reactid="30">
                                <div className="maestro-nav__feature-wrap" data-reactid="31">
                                    <span className="ue-effect-container uee-FeatureNav-sharing" data-reactid="32">
                                        <a href="#" className="maestro-nav__feature" data-reactid="33">
                                            Compartilhamento
                                        </a>
                                    </span>
                                </div>
                            </li>
                            <li data-reactid="35">
                                <div className="maestro-nav__feature-wrap" data-reactid="36">
                                    <span className="ue-effect-container uee-FeatureNav-fileRequests" data-reactid="37">
                                        <a href="#" className="maestro-nav__feature" data-reactid="38">
                                            Solicitações de arquivo
                                        </a>
                                    </span>
                                </div>
                            </li>
                            <li data-reactid="40">
                                <div className="maestro-nav__feature-wrap" data-reactid="41">
                                    <span className="ue-effect-container uee-FeatureNav-deletedFiles" data-reactid="42">
                                        <a href="#" className="maestro-nav__feature" data-reactid="43">
                                            Arquivos excluídos
                                        </a>
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
                                <div className="maestro-nav-switcher-button__content" data-reactid="49">
                                    <div className="maestro-nav-switcher-button__info" data-reactid="50">
                                        <div className="maestro-nav-switcher-button__title" data-reactid="51">HCODE</div>
                                        <div className="maestro-nav-switcher-button__label" data-reactid="52">3 membros</div>
                                    </div>
                                    <svg className="maestro-nav-switcher-button__icon" viewBox="0 0 24 24" data-reactid="53">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-reactid="54">
                                            <g id="form" transform="translate(-160.000000, -32.000000)" fill="#000000" data-reactid="55">
                                                <g id="form-switcher" transform="translate(160.000000, 32.000000)" data-reactid="56">
                                                    <path d="M10.5,9 L8.26000214,9 L12.0100021,4 L15.7600021,9 L13.5,9 L12,7 L10.5,9 Z" id="Combined-Shape" data-reactid="57"></path>
                                                    <path d="M10.5,20 L8.26000214,20 L12.0100021,15 L15.7600021,20 L13.5,20 L12,18 L10.5,20 Z" id="Combined-Shape" transform="translate(12.010002, 17.500000) scale(1, -1) translate(-12.010002, -17.500000) "
                                                        data-reactid="58"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

)