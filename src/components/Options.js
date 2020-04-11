import React from "react";

export default (props) => (
    <div className="col-md-3">
        <button id="btn-send-file" type="button" onClick={props.openSelectOptionFile}
            className="btn btn-primary btn-block btn-sm">Send file</button>
        <button id="btn-rename" type="button"
            className="btn btn-link btn-block btn-sm btn-icon"
            onClick={props.openDialogFileRename}
            >
            <i className="ion-edit"></i>Rename
        </button>

        <button id="btn-delete" type="button"
            onClick={props.removeFiles}
            className="btn btn-link btn-block btn-sm btn-icon">
            <i className="ion-trash-a"></i>Remove</button>

         <button id="btn-delete" type="button"
            onClick={props.downloadFile}
            className="btn btn-link btn-block btn-sm btn-icon">
            <i className="ion-trash-a"></i>Download</button>
    </div>
)