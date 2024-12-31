import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthState = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // 컴포넌트가 언마운트될 때 리스너 해제
  }, []);

  return (
    <div>
      {user ? (
        <p>{user.email} 님, 환영합니다!</p>
      ) : (
        <p>로그인되지 않았습니다.</p>
      )}
    </div>
  );
};

export default AuthState;
