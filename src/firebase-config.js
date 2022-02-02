// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9RXB0lzvNocgJz3uLhkaDmlQ3rhyD6XU",
  authDomain: "hospital-management-syst.firebaseapp.com",
  projectId: "hospital-management-syst",
  storageBucket: "hospital-management-syst.appspot.com",
  messagingSenderId: "234247372823",
  appId: "1:234247372823:web:636687146fc0b494f61c52",
  measurementId: "G-FFHE28HGE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// const analytics = getAnalytics(app);
