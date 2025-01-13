import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateQuestionCss from "../assets/css/createQuestion.module.css";
import { getAuth } from "firebase/auth";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const CreateQuestion = ({ addQuestion }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = getAuth();
    
    const user = auth.currentUser;
    if (user) {
      // Firestore에서 사용자 닉네임 가져오기
      const fetchNickName = async () => {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setNickName(userDoc.exists() ? userDoc.data().nickName : "Unknown");
      };
      fetchNickName();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 질문 데이터를 Firestore에 저장
    try {
      await addDoc(collection(db, "questions"), {
        title,
        content,
        author: nickName,
        createdAt: new Date(),
      });
      alert("질문이 성공적으로 등록되었습니다.");
      // 새로운 질문 추가
      addQuestion({ title, content });
      navigate("/");
    } catch (error) {
      console.error("질문 등록 실패:", error);
    }
  };

  return (
    <form
      className={`border createQuestionSection ${CreateQuestionCss.createQuestionSection}`}
      onSubmit={handleSubmit}
    >
      <input
        className={`${CreateQuestionCss.inputTitle}`}
        type="text"
        id="questionTitle"
        name="questionTitle"
        placeholder="질문 제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className={`${CreateQuestionCss.textarea}`}
        id="questionContent"
        name="questionContent"
        placeholder="질문 내용을 작성하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button className={`${CreateQuestionCss.btn}`} type="submit">
        질문등록
      </button>
    </form>
  );
};

export default CreateQuestion;
