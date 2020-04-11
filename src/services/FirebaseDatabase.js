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

    create(datas) {
        return this.getFirebase()
            .database()
            .ref(this._collection)
            .push(datas);
    }

    findAll(orderByField) {
        return new Promise((resolve, reject) => {
            return this.getFirebase()
                .database()
                .ref(this._collection)
                .orderByChild("isInative")
                .equalTo(false)
                .on("value", function (snapshot) {
                    resolve(snapshot.val());
                }, function (error) {
                    reject(error);
                });
        });
    }

    update(id, datasModified) {
        return this.getFirebase()
            .database()
            .ref(`${this._collection}/${id}`)
            .update(datasModified);
    }

}

export default FirebaseDatabase;