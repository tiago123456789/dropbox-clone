import React from "react";
import "../assets/css/file.css";

export default (props) => (
    <header className="maestro-header page-header__shadow">
        <div className="page-header">
            <div className="page-header__title page-header__title-overflow" tabindex="0">
                <span className="ue-effect-container uee-PageletMaestroHeader-Title">
                    <span>
                        <h1 className="ax-visually-hidden">Meus Arquivos</h1>
                        <nav className="page-header-text u-l-fl" id="browse-location" aria-label="Hierarquia de pastas" role="navigation">
                            <span className="breadcrumb-segment__wrapper">
                            </span>
                        </nav>
                    </span>
                </span>
            </div>
            <div className="top-menu-container ">
                <div className="search-bar--container u-l-fr">
                    <div className="is-collapsed search-bar">
                        <form className="search-bar__input">
                            <button aria-label="Buscar" className="search-bar__button" type="submit">
                                <svg width="24" height="24" viewBox="0 0 24 24" className="mc-icon-template-selectable">
                                    <title>Artboard</title>
                                    <defs>
                                        <circle id="mc-global-search-small-a" cx="5" cy="5" r="5"></circle>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M15 15l3 3" stroke="#637282" stroke-width="2" stroke-linecap="round"></path>
                                        <g transform="translate(7 7)">
                                            <mask id="mc-global-search-small-b" fill="#fff">
                                                <use ></use>
                                            </mask>
                                            <circle stroke="#637282" stroke-width="4" mask="url(#mc-global-search-small-b)" cx="5" cy="5" r="5"></circle>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <input aria-activedescendant="search-dropdown-suggestion0" aria-autocomplete="list" aria-expanded="false" aria-label="Buscar" aria-owns="search-bar__suggestions" className="search-bar__text-input" placeholder="Buscar" role="combobox" value="" tabindex="1" />
                        </form>
                    </div>
                </div>
                <div className="top-menu-container--search-bar-empty-space"></div>
            </div>
        </div>
    </header>
)