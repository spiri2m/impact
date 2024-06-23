import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDjrBiBDxezslIsDa8iTsfCbxpHhqaULIQ",
    authDomain: "impactad-e0226.firebaseapp.com",
    projectId: "impactad-e0226",
    storageBucket: "impactad-e0226.appspot.com",
    messagingSenderId: "767573302052",
    appId: "1:767573302052:web:8bdecd38c6d7c0d0ffb1b1"
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)