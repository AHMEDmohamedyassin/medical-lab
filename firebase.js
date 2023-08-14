// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFxM8nsrYd0BGN3_sIKYkDK5dGnRdzUPk",
  authDomain: "themedicallab1-d0510.firebaseapp.com",
  projectId: "themedicallab1-d0510",
  storageBucket: "themedicallab1-d0510.appspot.com",
  messagingSenderId: "1036772723527",
  appId: "1:1036772723527:web:d62cb7ec7ef5139af29a62",
  measurementId: "G-TZT6HTSG3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

const analytics = getAnalytics(app);