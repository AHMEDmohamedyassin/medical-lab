// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFxM8nsrYd0BGN3_sIKYkDK5dGnRdzUPk",
  authDomain: "themedicallab1-d0510.firebaseapp.com",
  databaseURL: "https://themedicallab1-d0510-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "themedicallab1-d0510",
  storageBucket: "themedicallab1-d0510.appspot.com",
  messagingSenderId: "1036772723527",
  appId: "1:1036772723527:web:d62cb7ec7ef5139af29a62",
  measurementId: "G-TZT6HTSG3T"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const rtdb = getDatabase(app);
export const auth = getAuth(app);

