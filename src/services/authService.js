// src/authService.js
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const provider = new GoogleAuthProvider();
// 회원가입
export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
};

// 로그인
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
};

// 로그아웃
export const logout = async () => {
  try {
    await signOut(auth); // Firebase 로그아웃
    console.log("Firebase 로그아웃 성공");
  } catch (error) {
    console.error("Firebase 로그아웃 실패:", error);
  }
};

// 카카오 로그아웃 함수
export const logoutKakao = () => {
  if (window.Kakao) {
    window.Kakao.Auth.logout(() => {
      console.log("Kakao 로그아웃 성공");
    });
  } else {
    console.error("Kakao SDK가 로드되지 않았습니다.");
  }
};

// google 로그인
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    // 로그인한 사용자 정보
    const user = result.user;
    console.log("User Info:", user);

    // Google의 액세스 토큰(필요한 경우)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log("Access Token:", token);

    return { user, token };
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    return { error: error.message };
  }
};

