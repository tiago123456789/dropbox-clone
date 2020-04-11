import AbstractFirebase from "./AbstractFirebase";

class FirebaseStorage extends AbstractFirebase {

    constructor() {
        super();
    }

    uploadFile(filename, file) {
        return this.getFirebase()
            .storage()
            .ref(`dropbox-clone/${filename}`)
            .put(file);
    }

    getDownloadUrl(filename) {
        return this.getFirebase().storage().ref(`dropbox-clone/${filename}`).getDownloadURL();
    }
}

export default FirebaseStorage;