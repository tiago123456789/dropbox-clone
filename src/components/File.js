import React from "react";
import FileUtil from "../util/File";
import "../assets/css/file.css";

export default (props) => {
    const datas = props.datas;
    const key = Object.keys(datas)[0];
    const file = datas[key];
    if (FileUtil.isImage(file.contentType)) {
        return (
            <div className={`file ${file.selected == true ? 'file-selected' : ''}`}
            >
                <i className="fa fa-file-image-o fa-5x" onClick={() => props.unselectOrselectFile(key)}></i>
                <br/> 
                {/* {file.id} */}
            </div>
        );
    } else if (FileUtil.isPdf(file.contentType)) {
        return (
            <div className={`file ${file.selected == true ? 'file-selected' : ''}`}
            >
                <i className="fa fa-file-pdf-o fa-5x" onClick={() => props.unselectOrselectFile(key)}></i>
            </div>
        );
    } else if (FileUtil.isAudio(file.contentType)) {
        return (
            <div className={`file ${file.selected == true ? 'file-selected' : ''}`}
            >
                <i className="fa fa-file-audio-o fa-5x" onClick={() => props.unselectOrselectFile(key)}></i>
            </div>
        );
    } else if (FileUtil.isVideo(file.contentType)) {
        return (
            <div className={`file ${file.selected == true ? 'file-selected' : ''}`}
            >
                <i className="fa fa-file-video-o fa-5x" onClick={() => props.unselectOrselectFile(key)}></i>
            </div>
        );
    }

    return false;
}