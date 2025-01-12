import { useParams } from "react-router-dom";
import CheckQuestionCss from "../assets/css/checkQuestion.module.css";
import { useState, useEffect, useRef } from "react";
import { EditModal } from "../components/EditModal";

const CheckQuestion = ({ questions }) => {
  const { id } = useParams(); // URL에서 id 가져오기
  const [showEditId, setShowEditId] = useState(null); // 수정, 삭제 모달 관련
  const modalRefs = useRef([]); // 각 모달의 ref 배열
  const question = questions[id]; // 해당 질문 데이터 가져오기

  const [isEditable, setIsEditable] = useState(false); // 수정 가능 여부
  const [name, setName] = useState("작성자이름");
  const [formText, setFormText] = useState("");
  const [commentList, setCommentList] = useState([]);

  // 댓글 추가 함수
  const addComment = (newFormText) => {
    setCommentList((prevCommentList) => [...prevCommentList, newFormText]);
  };

  // 댓글 등록
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formText !== "") {
      addComment({ name, formText });
      setFormText("");
    }
  };

  // 삭제 모달 오픈
  const openEditModal = (id) => {
    setShowEditId((prevId) => (prevId === id ? null : id)); // 같은 ID를 클릭하면 닫기
  };

  // 모달 외 클릭 시 닫는 기능
  useEffect(() => {
    const handleClickOutside = (event) => {
      modalRefs.current.forEach((ref, idx) => {
        if (ref && !ref.contains(event.target)) {
          if (showEditId === idx) setShowEditId(null);
        }
      });
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showEditId]);

  // textarea 높이 조정 함수
  const adjustHeight = (textarea) => {
    textarea.style.height = "auto"; // 기존 높이를 초기화
    textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞춰 높이 설정
  };

  if (!question) {
    return <p>질문을 찾을 수 없습니다.</p>;
  }

  return (
    <div
      className={`border checkQuestionSection ${CheckQuestionCss.checkQuestionSection}`}
    >
      <div className={`${CheckQuestionCss.questionBox}`}>
        <h1 className={`${CheckQuestionCss.questionTitle}`}>
          {question.title}
        </h1>
        <p className={`${CheckQuestionCss.questionText}`}>{question.content}</p>
      </div>
      <form
        className={`border ${CheckQuestionCss.form}`}
        onSubmit={handleSubmit}
      >
        <textarea
          className={`${CheckQuestionCss.formText}`}
          type="text"
          name="text"
          value={formText}
          onChange={(e) => setFormText(e.target.value)}
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
          {commentList.map((commentItem, idx) => (
            <li key={idx} className={`${CheckQuestionCss.commentItem}`}>
              <div className={`${CheckQuestionCss.commentImg}`}>
                <span className={`${CheckQuestionCss.tempImg}`}></span>
              </div>
              <div className={`${CheckQuestionCss.commentN_T}`}>
                <h1 className={`${CheckQuestionCss.commentName}`}>
                  {commentItem.name}
                </h1>
                <textarea
                  className={`${CheckQuestionCss.commentText}`}
                  id="textModify"
                  type="text"
                  name="text"
                  value={commentItem.formText}
                  readOnly={!isEditable}
                  onChange={(e) => {
                    if (isEditable) {
                      const updatedCommentList = [...commentList];
                      updatedCommentList[idx].formText = e.target.value;
                      setCommentList(updatedCommentList);
                    }
                  }}
                  ref={(textarea) => {
                    if (textarea) adjustHeight(textarea);
                  }}
                />
              </div>
              <div
                ref={(el) => (modalRefs.current[idx] = el)} // 각 모달의 ref 저장
                className={`${CheckQuestionCss.commentEditBox}`}
              >
                <span
                  onClick={() => openEditModal(idx)}
                  className={`${CheckQuestionCss.edit}`}
                >
                  •••
                </span>
                <div
                  className={`fade ${
                    showEditId === idx ? "visible" : "hidden"
                  }`}
                >
                  {showEditId === idx && (
                    <EditModal
                      idx={idx}
                      setCommentList={setCommentList}
                      setShowEditId={setShowEditId}
                      formTexts={commentItem.formText}
                    />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckQuestion;
