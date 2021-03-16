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

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
