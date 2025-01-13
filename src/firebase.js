import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
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

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firebase Authentication 및 Firestore 초기화
export const auth = getAuth(app);
export const db = getFirestore(app);

// 로그인 상태를 localStorage에 저장하여 유지
// setPersistence(auth, browserLocalPersistence)
//   .then(() => {
//     console.log("Login persistence set to localStorage");
//   })
//   .catch((error) => {
//     console.error("Failed to set persistence:", error.message);
//   });