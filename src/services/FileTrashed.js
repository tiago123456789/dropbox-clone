import FirebaseDatabase from "./FirebaseDatabase";

class FileTrashed {

    constructor() {
        this._firebaseDatabase = new FirebaseDatabase("files");
    }

    findAll() {
        return new Promise((resolve, reject) => {
            return this._firebaseDatabase
                .getDatabase()
                .ref(this._firebaseDatabase.getCollection())
                .orderByChild("isInative")
                .equalTo(true)
                .on("value", function (snapshot) {
                    resolve(snapshot.val());
                }, function (error) {
                    reject(error);
                });
        });
    }
}

export default FileTrashed;