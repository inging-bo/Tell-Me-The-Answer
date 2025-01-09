import CreateQuestionCss from "../assets/css/createQuestion.module.css";

// import { Link } from "react-router-dom";

const CreateQuestion = () => {
  return (
    <form
      className={`border createQuestionSection ${CreateQuestionCss.createQuestionSection}`}
    >
      <input
        className={`${CreateQuestionCss.inputTitle}`}
        type="text"
        id="questionTitle"
        name="questionTitle"
        placeholder="질문 제목을 입력하세요"
      />
      <textarea
        className={`${CreateQuestionCss.textarea}`}
        id="questionContent"
        name="questionContent"
        placeholder="질문 내용을 작성하세요"
      ></textarea>
      <button className={`${CreateQuestionCss.btn}`} type="submit">
        질문등록
      </button>
    </form>
  );
};

export default CreateQuestion;
