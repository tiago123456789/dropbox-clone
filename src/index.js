import React from "react";
import ReactDom from "react-dom";
import * as firebase from "firebase"
import CONSTANTS from "./constantes/App";

 const firebaseConfig = {
    apiKey: firebase_apiKey,
    authDomain: firebase_authDomain,
    databaseURL: firebase_databaseURL,
    projectId: firebase_projectId,
    storageBucket: firebase_storageBucket,
    messagingSenderId: firebase_messagingSenderId,
    appId: firebase_appId,
    measurementId: firebase_measurementId
  };

  const app = firebase.initializeApp(firebaseConfig)
  app.database()
    .ref("peoples")
    .push({ name: "Another user", email: "anotheruser@gmail.com" })
ReactDom.render((<p>Text</p>), document.getElementById("root"));
