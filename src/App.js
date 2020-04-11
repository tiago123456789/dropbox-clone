import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Options from "./components/Options";
import Header from "./components/Header";
import File from "./components/File";
import FirebaseStorage from "./services/FirebaseStorage";
import FirebaseDatabase from "./services/FirebaseDatabase";
import FileUtil from "./util/File";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
        this.setFilesInState = this.setFilesInState.bind(this);
        this.openSelectOptionFile = this.openSelectOptionFile.bind(this);
        this.handlerFile = this.handlerFile.bind(this);
        this.storeInFireStorage = this.storeInFireStorage.bind(this);
        this.storeDataInFileCollection = this.storeDataInFileCollection.bind(this);
        this._firebaseStorageService = new FirebaseStorage();
        this._firebaseDatabaseService = new FirebaseDatabase("files");
    }

    storeDataInFileCollection(uploadSnapshot) {
        const { contentType, name, type, size, timeCreated } = uploadSnapshot.metadata;
        this._firebaseDatabaseService.create(
            { type, id: name, contentType, size, createdAt: timeCreated }
        )
        .then(console.log)
        .catch(console.log)
    }

    storeInFireStorage(blob) {
        this._firebaseStorageService
            .uploadFile(uuidv4(), blob)
            .then(this.storeDataInFileCollection)
            .catch(console.log)
    }

    handlerFile() {
        const file = this.refs.file.files[0];
        FileUtil
            .transformFileToBlob(file)
            .then(this.storeInFireStorage)
    }

    openSelectOptionFile() {
        this.refs.file.click();
    }

    setFilesInState(datas) {
        const keys = Object.keys(datas);
        datas = keys.map(key => ({ [key]: datas[key] }) )
        this.setState({ files: datas });
    }

    componentDidMount() {
        this._firebaseDatabaseService.findAll("id")
        .then(this.setFilesInState)
        .catch(console.log);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <Header />
                        <section id="content-section">
                            <div className="row">
                                <div className="col-md-9">
                                    <br />
                                    { this.state.files.map(file => <File datas={file} />) }
                                </div>
                                <input ref="file" type="file" className="hidden" onChange={this.handlerFile} />
                                <Options openSelectOptionFile={this.openSelectOptionFile} />
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}
export default App;