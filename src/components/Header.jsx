import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { logout, logoutKakao } from "../services/authService"; // authService에서 logout 가져오기

const Header = () => {
  const [loginState, setLoginState] = useState("로그인");
  const [loginSource, setLoginSource] = useState(null); // 로그인 소스를 관리 (firebase, kakao)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginState("로그아웃");
        setLoginSource("firebase"); // Firebase 로그인 시 소스를 firebase로 설정
      } else {
        setLoginState("로그인");
        setLoginSource(null); // Firebase 로그아웃 시 소스를 null로 설정
      }
    });

    return () => unsubscribe(); // 컴포넌트가 언마운트될 때 리스너 해제
  }, []);

  // 로그아웃 처리
  const handleLogout = () => {
    if (loginSource === "firebase") {
      // Firebase 로그아웃
      logout().then(() => {
        setLoginState("로그인");
        setLoginSource(null);
      });
    } else if (loginSource === "kakao") {
      // Kakao 로그아웃
      logoutKakao();
      setLoginState("로그인");
      setLoginSource(null);
    }
  };

  return (
    <header>
      <Link to={"/"} className="logo">
        Money Planet
      </Link>
      <nav>
        <Link to={"/account"}>자산</Link>
        <Link to={"/finance"}>가계부</Link>
        <Link to={"/news"}>경제뉴스</Link>

        {/* 로그인 상태에 따라 버튼 표시 */}
        {loginState === "로그인" ? (
          <label htmlFor="login" className="loginBtn">
            {loginState}
          </label>
        ) : (
          <div onClick={handleLogout} className="loginBtn">
            {loginState}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
