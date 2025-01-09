import { useParams } from "react-router-dom";
import CheckQuestionCss from "../assets/css/checkQuestion.module.css";
import { useState, useEffect } from "react";
import { EditModal } from "../components/EditModal";

const CheckQuestion = ({ questions }) => {
  
  const { id } = useParams(); // URL에서 id 가져오기
  const [showEdit, setShowEdit] = useState(false);
  
  const question = questions[id]; // 해당 질문 데이터 가져오기

  const openEditModal = () => {
    setShowEdit(!showEdit);
  };

  // 모달 외 클릭 시 닫는 기능
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".handleClickOutside") &&
        !event.target.closest(".edit-button")
      ) {
        setShowEdit(false);
      }
    };

    if (showEdit) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showEdit]);

  if (!question) {
    return <p>질문을 찾을 수 없습니다.</p>;
  }

  return (
    <div
      className={`border checkQuestionSection ${CheckQuestionCss.checkQuestionSection}`}
    >
      <div className={`${CheckQuestionCss.questionBox}`}>
        <h1 className={`${CheckQuestionCss.questionTitle}`}>{question.title}</h1>
        <p className={`${CheckQuestionCss.questionText}`}>{question.content}</p>
      </div>
      <form className={`border ${CheckQuestionCss.form}`}>
        <textarea
          className={`${CheckQuestionCss.formText}`}
          type="text"
          name="text"
          placeholder="댓글을 입력해주세요"
        />
        <button
          htmlFor="text"
          className={`${CheckQuestionCss.formBtn}`}
          type="submit"
        >
          등록
        </button>
      </form>
      <div className={`${CheckQuestionCss.commentBox}`}>
        <ul className={`${CheckQuestionCss.commentList}`}>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>
                제목
              </h1>
              <p className={`${CheckQuestionCss.commentText}`}>
                댓글 내용
              </p>
            </div>
            <div
              className={`handleClickOutside ${CheckQuestionCss.commentEditBox}`}
            >
              <div className={`fade ${showEdit ? "visible" : "hidden"}`}>
                {showEdit && <EditModal />}
              </div>
              <span
                onClick={openEditModal}
                className={`${CheckQuestionCss.edit}`}
              >
                •••
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckQuestion;
