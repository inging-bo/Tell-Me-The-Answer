import CreateQuestionCss from "../assets/css/createQuestion.module.css";

// import { Link } from "react-router-dom";

const CreateQuestion = () => {
  return (
    <form className={`border ${CreateQuestionCss.section}`}>
  <div>
    <input type="text" id="questionTitle" name="questionTitle" placeholder="질문 제목을 입력하세요"/>
  </div>

  <div>
    <textarea id="questionContent" name="questionContent" placeholder="질문 내용을 작성하세요" rows="4" cols="50"></textarea>
  </div>
      <button type="submit">질문등록</button>
    </form>
  );
};

export default CreateQuestion;
