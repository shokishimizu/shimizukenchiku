// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB56DEyIUMA58xak8R46ozHzOtgmdoScnY",
    authDomain: "shimizukenchiku-hp.firebaseapp.com",
    projectId: "shimizukenchiku-hp",
    storageBucket: "shimizukenchiku-hp.appspot.com",
    messagingSenderId: "730004544710",
    appId: "1:730004544710:web:bf9803f52a2e11f0ad4bc7",
    measurementId: "G-PMY3P53LDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestorage = getStorage(app);
const firestore = getFirestore(app);

export const firebaseApp = {
    firestorage,
    firestore,
};

