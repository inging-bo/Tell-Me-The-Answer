import { useState } from "react";
import SignUpCss from "../../assets/css/signUp.module.css";
import { signup } from "../../services/authService.js"; // authService.js에서 signup 함수 import

const SignUp = () => {
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
    const result = await signup(formData.email, formData.password);
    if (result.user) {
      setMessage("회원가입 성공!");
      setFormData({
        email: "",
        password: "",
      })
      console.log(result.user);
    } else {
      setMessage("회원가입 실패: " + result.error);
    }
  };

  return (
    <div className="signUpModalBox">
      {/* 뒷배경 */}
      <label htmlFor="signUp" className="signUpModal"></label>

      {/* 회원가입 폼 */}
      <form
        className={`border ${SignUpCss.signUpForm}`}
        onSubmit={handleSubmit}
      >
        <h2 className={`${SignUpCss.title}`}>회원가입</h2>
        <div className={`${SignUpCss.inputBox}`}>
          <input
            type="email"
            name="email"
            className={`${SignUpCss.id}`}
            placeholder="이메일을 입력해주세요"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className={`${SignUpCss.pw}`}
            placeholder="비밀번호를 입력해주세요"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className={`border ${SignUpCss.signUpBtn}`} type="submit">
          회원가입 완료
        </button>
      </form>
      {message && <p className={SignUpCss.message}>{message}</p>}
    </div>
  );
};

export default SignUp;
