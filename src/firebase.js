import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7QnvkgGAVJgk2KWk0foWZO63I9hlGka8",
  authDomain: "tell-me-the-answer.firebaseapp.com",
  projectId: "tell-me-the-answer",
  storageBucket: "tell-me-the-answer.firebasestorage.app",
  messagingSenderId: "553166115760",
  appId: "1:553166115760:web:6cbfb01dd4a93e76043c75",
  measurementId: "G-EP97W6K435"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
