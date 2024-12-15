// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; //Import for Authentication
const firebaseConfig = {
  apiKey: "AIzaSyAhYaynvlcUlsGOD_cUNpJt2MngTRzAMT4",
  authDomain: "clinic-b7687.firebaseapp.com",
  projectId: "clinic-b7687",
  storageBucket: "clinic-b7687.firebasestorage.app",
  messagingSenderId: "316592013957",
  appId: "1:316592013957:web:86a96370e61efb21e69fec",
  measurementId: "G-Q00HDL5BFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth();
