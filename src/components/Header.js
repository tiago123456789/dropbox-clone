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
        </div>
    </header>
)