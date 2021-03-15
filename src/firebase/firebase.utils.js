import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDng7HzQ7QRSsqZvGoZ-BzXgFVpSIPm0O0",
  authDomain: "react-crwn-db-d6367.firebaseapp.com",
  projectId: "react-crwn-db-d6367",
  storageBucket: "react-crwn-db-d6367.appspot.com",
  messagingSenderId: "135329758447",
  appId: "1:135329758447:web:48fe9240052a3371e5af1a",
  measurementId: "G-Q51VEXG1H5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
