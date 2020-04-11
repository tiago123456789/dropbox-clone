import AbstractFirebase from "./AbstractFirebase";

class FirebaseDatabase extends AbstractFirebase {

    constructor(collection) {
        super();
        this._collection = collection;
    }

    getDatabase() {
        return this.getFirebase().database();
    }

    getCollection() {
        return this._collection;
    }

    create(datas, owner) {
        return this.getFirebase()
            .database()
            .ref(`${this._collection}/${owner}`)
            .push(datas);
    }

    findAll(orderByField, owner) {
        return new Promise((resolve, reject) => {
            return this.getFirebase()
                .database()
                .ref(`${this._collection}/${owner}`)
                .orderByChild("isInative")
                .equalTo(false)
                .on("value", function (snapshot) {
                    resolve(snapshot.val());
                }, function (error) {
                    reject(error);
                });
        });
    }

    update(id, owner, datasModified) {
        return this.getFirebase()
            .database()
            .ref(`${this._collection}/${owner}/${id}`)
            .update(datasModified);
    }

}

export default FirebaseDatabase;