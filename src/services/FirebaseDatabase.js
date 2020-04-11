import AbstractFirebase from "./AbstractFirebase";

class FirebaseDatabase extends AbstractFirebase {

    constructor(collection) {
        super();
        this._collection = collection;
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
                .orderByChild(orderByField)
                .on("value", function (snapshot) {
                    resolve(snapshot.val());
                }, function (error) {
                    reject(error);
                });
        });

    }
}

export default FirebaseDatabase;