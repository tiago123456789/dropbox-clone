import * as firebase from "firebase";
let firebaseApp = null;

class AbstractFirebase {

    constructor() {
        this._initialize();
    }

    _initialize() {
        if (firebaseApp != null) {
            return;
        }

        const configurations = {
            apiKey: firebase_apiKey,
            authDomain: firebase_authDomain,
            databaseURL: firebase_databaseURL,
            projectId: firebase_projectId,
            storageBucket: firebase_storageBucket,
            messagingSenderId: firebase_messagingSenderId,
            appId: firebase_appId,
            measurementId: firebase_measurementId
        };

        firebaseApp = firebase.initializeApp(configurations);
    }

    getFirebase() {
        return firebaseApp;
    }
}

export default AbstractFirebase;