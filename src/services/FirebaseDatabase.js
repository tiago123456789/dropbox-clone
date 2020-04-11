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
                .orderByChild("isInative")
                .equalTo(false)
                .on("value", function (snapshot) {
                    console.log(snapshot.val());
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