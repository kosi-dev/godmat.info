import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9a_e4lH7FTnSoorBzFzVDl4CQgSLynmU",
    authDomain: "nam-data.firebaseapp.com",
    databaseURL: "https://nam-data-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nam-data",
    storageBucket: "nam-data.appspot.com",
    messagingSenderId: "119525438884",
    appId: "1:119525438884:web:b8bcbe8fe0a83484a4bd31",
    measurementId: "G-Z5XCC9X469"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

async function signIn() {
    signInWithPopup(auth, provider)
        .catch((error) => {
            console.error(error.code);
            console.error(error.message);
        });
}

export { app, db, auth, signIn }
