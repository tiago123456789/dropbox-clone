import React from "react";

export default (props) => (
    <div className="col-md-3">
        <button id="btn-send-file" type="button" onClick={props.openSelectOptionFile}
        className="btn btn-primary btn-block btn-sm">Enviar arquivos</button>
        <button id="btn-new-folder" type="button" className="btn btn-link btn-block btn-sm btn-icon">
            <i className="ion-android-folder-open"></i>Nova Pasta</button>
        <button id="btn-rename" type="button" className="btn btn-link btn-block btn-sm btn-icon">
            <i className="ion-edit"></i>Renomear</button>
        <button id="btn-delete" type="button" className="btn btn-link btn-block btn-sm btn-icon">
            <i className="ion-trash-a"></i>Excluir</button>
    </div>
)