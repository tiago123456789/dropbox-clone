import React from "react";
import FileUtil from "../util/File";
import "../assets/css/file.css";

export default (props) => {
    const datas = props.datas;
    const key = Object.keys(datas)[0];
    const file = datas[key];
    const filename = (file.name || file.id);
    let contentRender = false;

    if (FileUtil.isImage(file.contentType)) {
        contentRender = (
            <div className={`col-md-3 file ${file.selected == true ? 'file-selected' : ''}`}
            >
                <i className="fa fa-file-image-o fa-5x" 
                    onClick={() => props.unselectOrselectFile(key)}></i>
                <br/> 
                <p>{filename}</p>
            </div>
        );
    } else if (FileUtil.isPdf(file.contentType)) {
        contentRender = (
            <div className={`col-md-3 file ${file.selected == true ? 'file-selected' : ''}`}
            >
                <i className="fa fa-file-pdf-o fa-5x" onClick={() => props.unselectOrselectFile(key)}></i>
                <p>{filename}</p>
            </div>
        );
    } else if (FileUtil.isAudio(file.contentType)) {
        contentRender = (
            <div className={`col-md-3 file ${file.selected == true ? 'file-selected' : ''}`}
            >
                <i className="fa fa-file-audio-o fa-5x" onClick={() => props.unselectOrselectFile(key)}></i>
                <p>{filename}</p>
            </div>
        );
    } else if (FileUtil.isVideo(file.contentType)) {
        contentRender = (
            <div className={`col-md-3 file ${file.selected == true ? 'file-selected' : ''}`}
            >
                <i className="fa fa-file-video-o fa-5x" onClick={() => props.unselectOrselectFile(key)}></i>
                <p>{filename}</p>
            </div>
        );
    }

    return contentRender;
}