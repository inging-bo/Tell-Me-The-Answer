import { useState } from "react";
import LoginCss from "../assets/css/login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

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
    <section>
      <h1 className={`${LoginCss.title}`}>Login</h1>
      <div className={`border ${LoginCss.google}`}><svg id="dd" className="googleLogo" height="30" width="30" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"></path><path fill="#34a853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"></path><path fill="#fbbc04" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"></path><path fill="#ea4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"></path></svg><span>sign up with Google</span></div>
      <p className={`${LoginCss.or}`}><span>or</span></p>
      <form className={`${LoginCss.form}`} onSubmit={handleSubmit}>
        <input
          className={`${LoginCss.id}`}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="ID"
          required
        />
        <input
          className={`${LoginCss.pw}`}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className={`${LoginCss.loginBtn}`} type="submit">Login</button>
      </form>
      <Link to={'/signUp'} className={`${LoginCss.goSignUp}`} >Sign Up</Link>
    </section>
  );
};

export default Login;
