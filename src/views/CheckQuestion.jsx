import { useParams } from "react-router-dom";
import CheckQuestionCss from "../assets/css/checkQuestion.module.css";
import { useState, useEffect, useRef } from "react";
import { EditModal } from "../components/EditModal";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore"; // Firebase Firestore imports
import { db } from "../firebase"; // Firebase app initialization (adjust path as needed)

const CheckQuestion = () => {
  const { id } = useParams(); // URL에서 id 가져오기
  const [question, setQuestion] = useState(null); // 질문 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [showEditId, setShowEditId] = useState(null); // 수정, 삭제 모달 관련
  const modalRefs = useRef([]); // 각 모달의 ref 배열

  const [isEditable, setIsEditable] = useState(false); // 수정 가능 여부
  const [name, setName] = useState("작성자이름");
  const [formText, setFormText] = useState("");
  const [commentList, setCommentList] = useState([]);

  // 서버에서 데이터 가져오기 (Firestore에서)
  useEffect(() => {
    const fetchQuestion = async () => {
      // 먼저 로컬스토리지에서 QUESTION 키로 데이터를 찾음
      const storedData = localStorage.getItem("QUESTION");
      const storedQuestion = storedData ? JSON.parse(storedData) : null;

      if (storedQuestion && storedQuestion[id]) {
        // QUESTION 안에 해당 ID로 저장된 질문이 있으면
        setQuestion(storedQuestion[id]); // 상태에 저장
        setLoading(false);
      } else {
        // QUESTION 안에 데이터가 없으면 Firestore에서 가져옴
        const docRef = doc(db, "questions", id); // "questions" 컬렉션에서 id로 해당 문서 참조
        try {
          const docSnap = await getDoc(docRef); // 해당 문서 읽기
          if (docSnap.exists()) {
            const questionData = docSnap.data();
            setQuestion(questionData); // 데이터를 상태에 저장

            // 로컬스토리지의 QUESTION 객체에 해당 ID를 추가
            const updatedData = storedData ? JSON.parse(storedData) : {};
            updatedData[id] = questionData;
            localStorage.setItem("QUESTION", JSON.stringify(updatedData)); // QUESTION 객체에 추가
          } else {
            console.log("No such document!");
          }
          setLoading(false); // 로딩 끝
        } catch (error) {
          console.error("Error getting document:", error);
          setLoading(false); // 에러 발생 시에도 로딩 종료
        }
      }
    };

    fetchQuestion();
  }, [id]); // id 값이 변경될 때마다 데이터를 다시 가져옴

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

  // 로딩 중 또는 데이터가 없는 경우 처리
  if (loading) {
    return <p>Loading question...</p>;
  }

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
        // onSubmit={handleSubmit}
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
