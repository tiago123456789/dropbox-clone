import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Options from "../components/Options";
import Header from "../components/Header";
import File from "../components/File";
import FirebaseStorage from "../services/FirebaseStorage";
import FirebaseDatabase from "../services/FirebaseDatabase";
import FileUtil from "../util/File";
import { v4 as uuidv4 } from 'uuid';
import { confirmAlert } from 'react-confirm-alert';
import DialogFileRename from "../components/DialogFileRename";
import CONSTANTS from "../constantes/App";
import NotificationService from "../services/Notification";
import 'react-confirm-alert/src/react-confirm-alert.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: [],
            newNameFile: ""
        };
        this.isSelectedOneFile = this.isSelectedOneFile.bind(this);
        this.renameFile = this.renameFile.bind(this);
        this.openDialogFileRename = this.openDialogFileRename.bind(this);
        this.changeValueInput = this.changeValueInput.bind(this);
        this.setFilesInState = this.setFilesInState.bind(this);
        this.openSelectOptionFile = this.openSelectOptionFile.bind(this);
        this.handlerFile = this.handlerFile.bind(this);
        this.storeInFireStorage = this.storeInFireStorage.bind(this);
        this.findAllFiles = this.findAllFiles.bind(this);
        this.removeFiles = this.removeFiles.bind(this);
        this.unselectOrselectFile = this.unselectOrselectFile.bind(this);
        this.storeDataInFileCollection = this.storeDataInFileCollection.bind(this);
        this.getIdUser = this.getIdUser.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
        this.getItemIdFirebase = this.getItemIdFirebase.bind(this);
        this._firebaseStorageService = new FirebaseStorage();
        this._firebaseDatabaseService = new FirebaseDatabase("files");
    }

    unselectOrselectFile(referenceFile) {
        let files = this.state.files;
        files = files.map(file => {
            const key = this.getItemIdFirebase(file);
            const isFileToSelect = key == referenceFile;
            if (isFileToSelect) {
                file[key].selected = !file[key].selected;
            }
            return file;
        });
        this.setState({ files });
    }

    getItemIdFirebase(item) {
        return Object.keys(item)[0]
    }

    removeFiles() {
        let files = this.state.files;
        files = files.filter(file => {
            return file[this.getItemIdFirebase(file)].selected
        })
            .map(file => {
                const id = this.getItemIdFirebase(file);
                this._firebaseDatabaseService
                    .update(id, this.getIdUser(), { isInative: true })
                    .then(this.findAllFiles)
                    .then(() => NotificationService.success('File removed success!'))
            });
    }

    findAllFiles() {
        this._firebaseDatabaseService.findAll("id", this.getIdUser())
            .then(this.setFilesInState)
    }

    getIdUser() {
        return localStorage.getItem(CONSTANTS.LOCALSTORAGE_KEY.ID);
    }

    storeDataInFileCollection(uploadSnapshot) {
        const { contentType, name, type, size, timeCreated } = uploadSnapshot.metadata;
        this._firebaseDatabaseService.create(
            {
                type, id: name, contentType, size, createdAt: timeCreated, isInative: false

            }, this.getIdUser()
        );
    }

    storeInFireStorage(blob) {
        this._firebaseStorageService
            .uploadFile(uuidv4(), blob)
            .then(this.storeDataInFileCollection)
            .then(this.findAllFiles)
    }

    handlerFile() {
        const file = this.refs.file.files[0];
        FileUtil
            .transformFileToBlob(file)
            .then(this.storeInFireStorage)
            .then(() => NotificationService.success("Upload file success!"));
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

    changeValueInput(key, value) {
        this.setState({ [key]: value })
    }

    openDialogFileRename() {
        if (!this.isSelectedOneFile()) {
            NotificationService.error("Is need select one file. Obs: You can select one file per time!");
            return;
        }

        const options = {
            title: 'Title',
            message: 'Message',
            buttons: [
                {
                    label: 'Yes',
                    onClick: this.renameFile
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ],
            childrenElement: () => <div />,
            customUI: (props) => {
                return <DialogFileRename
                    renameFile={this.renameFile}
                    changeValueInput={this.changeValueInput}
                    {...props}
                />
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

    isSelectedOneFile() {
        const filesSelected = this.state.files.filter(file => {
            return file[this.getItemIdFirebase(file)].selected
        });

        return filesSelected.length == 1;
    }

    renameFile() {
        let fileSelected = this.state.files.filter(file => {
            return file[this.getItemIdFirebase(file)].selected
        });

        fileSelected = fileSelected[0];
        const id = this.getItemIdFirebase(fileSelected);
        this._firebaseDatabaseService
            .update(id, this.getIdUser(), { name: this.state.newNameFile })
            .then(() => {
                this.setState({ newNameFile: "" });
                this.unselectOrselectFile(id);
                this.findAllFiles();
                NotificationService.success("Rename file success!");
            });
    }

    downloadFile(filename) {
        if (!this.isSelectedOneFile()) {
            NotificationService.error("Is need select one file. Obs: You can select one file per time!");
            return;
        }

        let fileSelected = this.state.files.filter(file => {
            return file[this.getItemIdFirebase(file)].selected
        });

        fileSelected = fileSelected[0];
        const key = this.getItemIdFirebase(fileSelected);
        filename = fileSelected[key]["id"];

        this._firebaseStorageService.getDownloadUrl(filename)
            .then(url => {
                FileUtil.download(url);
                this.setState({ newNameFile: "" });
                this.unselectOrselectFile(key);
            });
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
                        <Header />
                        <section id="content-section">
                            <div className="row">
                                <div className="col-md-9">
                                    <br />
                                    {this.renderFiles()}
                                </div>
                                <input ref="file" type="file" className="hidden"
                                    onChange={this.handlerFile} />
                                <Options
                                    downloadFile={this.downloadFile}
                                    openDialogFileRename={this.openDialogFileRename}
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