// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFY6JqE9uQKM-0fVsOMycKGqKDJOCWkSs",
  authDomain: "pantry-1b38e.firebaseapp.com",
  projectId: "pantry-1b38e",
  storageBucket: "pantry-1b38e.appspot.com",
  messagingSenderId: "1086768742382",
  appId: "1:1086768742382:web:b8c6eab51cdfc28aac98ff",
  measurementId: "G-E8LN24R2HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };