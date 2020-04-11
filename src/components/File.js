import React from "react";
import FileUtil from "../util/File";
import "../assets/css/file.css";

export default (props) => {
    const datas = props.datas;
    const key = Object.keys(datas)[0];
    const file = datas[key];

    if (FileUtil.isImage(file.contentType)) {
        return (
            <a className="file">
                <i className="fa fa-file-image-o fa-5x"></i>
            </a>
        );
    } else if (FileUtil.isPdf(file.contentType)) {
        return (
            <a className="file">
                <i className="fa fa-file-pdf-o fa-5x"></i>
            </a>
        );
    } else if (FileUtil.isAudio(file.contentType)) {
        return (
            <a className="file">
                <i className="fa fa-file-audio-o fa-5x"></i>
            </a>
        );
    } else if (FileUtil.isVideo(file.contentType)) {
        return (
            <a className="file">
                <i className="fa fa-file-video-o fa-5x"></i>
            </a>
        );
    }
}