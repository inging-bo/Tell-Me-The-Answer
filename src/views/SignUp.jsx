import { useState } from "react";
import SignUpCss from "../assets/css/signUp.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    nickName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 브라우저 기본 폼 제출 방지
    console.log("Form submitted:", formData);

    // API 요청 예시
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) alert("Login successful");
      else alert("Login failed");
    });
  };
  return (
    <section className={`${SignUpCss.section}`}>
      <h1 className={`${SignUpCss.title}`}>Sign Up</h1>
      <form className={`${SignUpCss.form}`} onSubmit={handleSubmit}>
        <div className={`${SignUpCss.dupChkBox}`}>
          <input
            className={`${SignUpCss.id}`}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="ID"
            minLength="4" 
            maxLength="20"
            required
          />
          <button className={`${SignUpCss.dupChkBtn}`}>중복확인</button>
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
            placeholder="별명"
            maxLength="20"
            required
          />
          <button className={`${SignUpCss.dupChkBtn}`}>중복확인</button>
        </div>
        <button className={`${SignUpCss.SignUpBtn}`} type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
