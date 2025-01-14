import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Firebase 인증 설정 가져오기
import { onAuthStateChanged, signOut } from "firebase/auth"; // 인증 상태 변경 및 로그아웃 기능

export const Header = () => {
  const [user, setUser] = useState(null); // 사용자 상태
  const navigate = useNavigate();
  
  useEffect(() => {
    // 인증 상태 리스너 설정
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인된 상태일 때
        setUser(user);
      } else {
        // 로그아웃된 상태일 때
        setUser(null);
      }
    });

    // 컴포넌트가 언마운트되면 리스너 제거
    return () => unsubscribe();
  }, []);

  // 로그아웃 처리 함수
  const handleLogout = async () => {
    try {
      alert("로그아웃 되었습니다.")
      await signOut(auth); // Firebase에서 로그아웃 처리
      navigate('/')
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <header>
      <Link to={"/"} className="logo">
        Tell Me The Answer
      </Link>
      <nav>
        {user ? (
          // 로그인된 경우 로그아웃 버튼 표시
          <button onClick={handleLogout} className="navItem logout">
          </button>
        ) : (
          // 로그인되지 않은 경우 로그인 링크 표시
          <Link to={"/login"} className="navItem login">
          </Link>
        )}
      </nav>
    </header>
  );
};
