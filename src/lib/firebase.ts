// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db }
