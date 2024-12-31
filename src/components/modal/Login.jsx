import { useState } from "react";
import LoginCss from "../../assets/css/login.module.css";
import { login } from "../../services/authService.js"; // authService.js에서 login 함수 import

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
      setMessage("로그인 성공!");
      setFormData({
        email: "",
        password: "",
      })
      console.log(result.user);
    } else {
      setMessage("로그인 실패: " + result.error);
    }
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
        <div className={`border ${LoginCss.other}`}>Google로 시작하기</div>
        <div className={`border ${LoginCss.other}`}>카카오로 시작하기</div>
        <label
          htmlFor="signUp"
          className={`signUpBtn ${LoginCss.signUpBtn}`}
        >
          회원가입하기
        </label>
        <button className={`border ${LoginCss.loginBtn}`} type="submit">
          로그인
        </button>
      </form>
      {message && <p className={LoginCss.message}>{message}</p>}
    </div>
  );
};

export default Login;
