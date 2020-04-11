import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Options from "./components/Options";
import Header from "./components/Header";
import File from "./components/File";
import FirebaseStorage from "./services/FirebaseStorage";
import FirebaseDatabase from "./services/FirebaseDatabase";
import FileUtil from "./util/File";
import { v4 as uuidv4 } from 'uuid';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DialogFileRename from "./components/DialogFileRename";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: [],
        }
        this.setFilesInState = this.setFilesInState.bind(this);
        this.openSelectOptionFile = this.openSelectOptionFile.bind(this);
        this.handlerFile = this.handlerFile.bind(this);
        this.storeInFireStorage = this.storeInFireStorage.bind(this);
        this.findAllFiles = this.findAllFiles.bind(this);
        this.removeFiles = this.removeFiles.bind(this);
        this.unselectOrselectFile = this.unselectOrselectFile.bind(this);
        this.storeDataInFileCollection = this.storeDataInFileCollection.bind(this);
        this._firebaseStorageService = new FirebaseStorage();
        this._firebaseDatabaseService = new FirebaseDatabase("files");
    }

    unselectOrselectFile(referenceFile) {
        let files = this.state.files;
        files = files.map(file => {
            const key = Object.keys(file)[0];
            const isFileToSelect = key == referenceFile;
            if (isFileToSelect) {
                file[key].selected = !file[key].selected;
            }
            return file;
        });
        this.setState({ files });
    }

    removeFiles() {
        let files = this.state.files;
        files = files.filter(file => {
            const key = Object.keys(file)[0];
            return file[key].selected
        })
            .map(file => {
                const id = Object.keys(file)[0];
                this._firebaseDatabaseService
                    .update(id, { isInative: true })
                    .then(console.log)
                    .then(this.findAllFiles)
                    .catch(console.log)
            });


    }

    findAllFiles() {
        this._firebaseDatabaseService.findAll("id")
            .then(this.setFilesInState)
            .catch(console.log);
    }

    storeDataInFileCollection(uploadSnapshot) {
        const { contentType, name, type, size, timeCreated } = uploadSnapshot.metadata;
        this._firebaseDatabaseService.create(
            { type, id: name, contentType, size, createdAt: timeCreated, isInative: false }
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
            .then(this.findAllFiles)
    }

    openSelectOptionFile() {
        this.refs.file.click();
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

    renderFiles() {
        return this.state.files
            .map((file, indice) => (<File key={indice}
                datas={file}
                unselectOrselectFile={this.unselectOrselectFile} />));
    }

    componentDidMount() {
        this.findAllFiles();
        const options = {
            title: 'Title',
            message: 'Message',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ],
            childrenElement: () => <div />,
            customUI: (props) => {
                console.log(props);
                return <DialogFileRename {...props}/>
            },
            closeOnEscape: true,
            closeOnClickOutside: true,
            willUnmount: () => { },
            afterClose: () => { },
            onClickOutside: () => { },
            onKeypressEscape: () => { }
        };

        confirmAlert(options);

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
                                    {/* {   this.state.files.map((file, indice) => {
                                            return (<File key={indice} datas={file} unselectOrselectFile={this.unselectOrselectFile} />); 
                                        })
                                     } */}
                                    {this.renderFiles()}
                                </div>
                                <input ref="file" type="file" className="hidden" onChange={this.handlerFile} />
                                <Options
                                    removeFiles={this.removeFiles}
                                    openSelectOptionFile={this.openSelectOptionFile} />
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}
export default App;