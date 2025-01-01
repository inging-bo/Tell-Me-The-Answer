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
      setFormData({
        email: "",
        password: "",
      })
      setMessage("")
      alert("회원가입을 성공하였습니다.")
      const signUpElement = document.querySelector('#signUp');
      signUpElement.checked = false;
    } else {
      if(result.error === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
        setMessage("비밀번호는 6자 이상이여야 합니다.");
      } else if (result.error === "Firebase: Error (auth/email-already-in-use).") {
        setMessage("사용중인 이메일 입니다.");
      } else {
        setMessage(`회원가입에 실패하였습니다 : ${result.error}`);
      }
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
        {message && <p className={SignUpCss.message}>{message}</p>}
        <button className={`border ${SignUpCss.signUpBtn}`} type="submit">
          회원가입 완료
        </button>
      </form>
    </div>
  );
};

export default SignUp;
