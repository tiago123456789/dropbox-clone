import AbstractFirebase from "./AbstractFirebase";

class FirebaseAuth extends AbstractFirebase {

    constructor() {
        super();
    }

    logout() {
        this.getFirebase().auth().signOut();
    }

    signIn(email, password) {
        return new Promise((resolve, reject) => {
            this.getFirebase()
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(resolve)
                .catch(reject);
        });
    }

    signUp(email, password) {
        return new Promise((resolve, reject) => {
            this.getFirebase()
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(resolve)
                .catch(reject);
        });
    }

    listenIfUserAuthenticate(callback) {
        this.getFirebase()
            .auth()
            .onAuthStateChanged(callback);
    }

    isAuthenticated(userId) {
       return this.getFirebase().auth().currentUser != null;
    }

}

export default FirebaseAuth;