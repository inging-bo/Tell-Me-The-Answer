// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfgmgYkx3ztQy02-2BQW6gGovNNdKq4x8",
  authDomain: "ing-project-f733e.firebaseapp.com",
  projectId: "ing-project-f733e",
  storageBucket: "ing-project-f733e.firebasestorage.app",
  messagingSenderId: "1091640045164",
  appId: "1:1091640045164:web:6d67334f0c87b7294bb249",
  measurementId: "G-DLYYQ381XP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };