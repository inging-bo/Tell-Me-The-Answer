import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateQuestionCss from "../assets/css/createQuestion.module.css";

const CreateQuestion = ({ addQuestion }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 질문 추가
    addQuestion({ title, content });

    // 메인 페이지로 이동
    navigate("/");
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
