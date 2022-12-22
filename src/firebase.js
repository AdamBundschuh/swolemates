import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8YQY7r27dJa7jaBwlu06guTTinTTYPKk",
  authDomain: "swolemates-68890.firebaseapp.com",
  projectId: "swolemates-68890",
  storageBucket: "swolemates-68890.appspot.com",
  messagingSenderId: "630391635433",
  appId: "1:630391635433:web:7deaf6532e0de388491f78",
  measurementId: "G-NS5YF9Z1ZP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
