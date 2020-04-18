import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import FilesTrashedService from "../services/FileTrashed";
import File from "../components/File";

class FilesTrashed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
        this._fileTrashedService = new FilesTrashedService();
        this.setFilesInState = this.setFilesInState.bind(this);
        this.findAllFiles = this.findAllFiles.bind(this);
    }

    setFilesInState(datas) {
        const isNull = datas == null;
        if (isNull) {
            this.setState({ files: [] });
            return;
        }

        const keys = Object.keys(datas);
        datas = keys.map(key => ({ [key]: datas[key] }))
        this.setState({ files: datas });
    }

    findAllFiles() {
        this._fileTrashedService.findAll()
            .then(this.setFilesInState)
    }

    renderFiles() {
        return this.state.files
            .map((file, indice) => (<File key={indice}
                datas={file}
                unselectOrselectFile={this.unselectOrselectFile} />));
    }

    componentDidMount() {
        this.findAllFiles();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main role="main"
                        className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <section id="content-section">
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    {this.renderFiles()}
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}

export default FilesTrashed;