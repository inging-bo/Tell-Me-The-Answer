import { useState } from "react";
import LoginCss from "../../assets/css/login.module.css";
import { login, signInWithGoogle } from "../../services/authService.js"; // authService.js에서 login 함수 import
import KakaoLogin from "react-kakao-login";
import { logout } from "../../services/authService"; // 로그아웃 함수 가져오기

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData.email, formData.password);
    if (result.user) {
      setFormData({
        email: "",
        password: "",
      });
      setMessage("");
      alert(`반갑습니다 ${formData.email}`);
      const signUpElement = document.querySelector('#login');
      signUpElement.checked = false;
    } else {
      setMessage("로그인 실패");
    }
  };

  const handleGoogleLogin = async () => {
    const response = await signInWithGoogle();
    if (response.error) {
      console.error("Login Failed:", response.error);
    } else {
      console.log("Login Success:", response.user);
      const signUpElement = document.querySelector('#login');
      signUpElement.checked = false;
    }
  };

  const handleKakaoSuccess = (response) => {
    console.log("Kakao Login Success:", response);
    const signUpElement = document.querySelector('#login');
    signUpElement.checked = false;
    // 카카오 로그인 후 Firebase 로그아웃 처리
    logout(); // Firebase 로그아웃
  };

  const handleFailure = (error) => {
    console.error("Kakao Login Failed:", error);
  };

  return (
    <div className="loginModalBox">
      {/* 뒷배경 */}
      <label htmlFor="login" className="loginModal"></label>

      {/* 로그인 폼 */}
      <form
        className={`border ${LoginCss.loginForm}`}
        onSubmit={handleSubmit}
      >
        <h2 className={`${LoginCss.title}`}>Money Planet</h2>
        <div className={`${LoginCss.inputBox}`}>
          <input
            type="email"
            name="email"
            className={`${LoginCss.id}`}
            placeholder="이메일을 입력해주세요"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className={`${LoginCss.pw}`}
            placeholder="비밀번호를 입력해주세요"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${LoginCss.orBox}`}>
          <span className={`${LoginCss.or}`}>또는</span>
        </div>
        <div onClick={handleGoogleLogin} className={`border ${LoginCss.other}`}>Google로 시작하기</div>
        <KakaoLogin
          token="4eb5002cbc38460d976a62fef8eee50f" // 카카오 디벨로퍼스의 JavaScript 키
          onSuccess={handleKakaoSuccess}
          onFail={handleFailure}
          onLogout={() => console.log("Logged out")}
          className={`border ${LoginCss.other}`}
        >
          카카오로 시작하기
        </KakaoLogin>
        <label
          htmlFor="signUp"
          className={`signUpBtn ${LoginCss.signUpBtn}`}
        >
          회원가입하기
        </label>
        {message && <p className={LoginCss.message}>{message}</p>}
        <button className={`border ${LoginCss.loginBtn}`} type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
