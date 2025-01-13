import { useState } from "react";
import SignUpCss from "../assets/css/signUp.module.css";
import { auth, db } from "../firebase";  // Firebase 인증과 Firestore 가져오기
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";  // Firestore에 데이터 저장을 위한 함수
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nickName: "",
  });
  const [error, setError] = useState(""); // 에러 상태 추가
  const navigate = useNavigate(); // 회원가입 후 리디렉션을 위한 useNavigate 추가

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 방지
    setError(""); // 에러 초기화

    const { email, password, nickName } = formData;

    // Firebase Authentication을 사용한 회원가입
    try {
      // 1. 이메일과 비밀번호로 Firebase에 사용자 계정 생성
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Firestore에 사용자 정보 저장
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        nickName: nickName,
        createdAt: new Date(),
      });

      alert("Sign up successful");
      navigate("/login"); // 회원가입 후 로그인 페이지로 리디렉션
    } catch (error) {
      console.error(error);
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <section className={`${SignUpCss.section}`}>
      <h1 className={`${SignUpCss.title}`}>Sign Up</h1>
      {error && <p className={`${SignUpCss.error}`}>{error}</p>} {/* 에러 메시지 표시 */}
      <form className={`${SignUpCss.form}`} onSubmit={handleSubmit}>
        <div className={`${SignUpCss.dupChkBox}`}>
          <input
            className={`${SignUpCss.id}`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            minLength="4"
            maxLength="40"
            required
          />
        </div>
        <input
          className={`${SignUpCss.pw}`}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          minLength="8"
          required
        />
        <div className={`${SignUpCss.dupChkBox}`}>
          <input
            className={`${SignUpCss.nickName}`}
            type="text"
            name="nickName"
            value={formData.nickName}
            onChange={handleChange}
            placeholder="Nickname"
            maxLength="20"
            required
          />
        </div>
        <button className={`${SignUpCss.SignUpBtn}`} type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
