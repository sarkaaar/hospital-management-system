import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const auth = getAuth(app);