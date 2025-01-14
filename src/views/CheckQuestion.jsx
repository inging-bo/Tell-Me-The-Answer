import { useParams } from "react-router-dom";
import CheckQuestionCss from "../assets/css/checkQuestion.module.css";
import { useState, useEffect, useRef } from "react";
import { EditModal } from "../components/EditModal";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore"; // Firebase Firestore imports
import { db } from "../firebase"; // Firebase app initialization (adjust path as needed)

const CheckQuestion = () => {
  const { id } = useParams(); // URL에서 id 가져오기
  const [question, setQuestion] = useState(null); // 질문 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [showEditId, setShowEditId] = useState(null); // 수정, 삭제 모달 관련
  const modalRefs = useRef([]); // 각 모달의 ref 배열

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
        const questionData = storedQuestion[id];
        setQuestion(questionData); // 질문 상태에 저장
        setCommentList(questionData.commentBox || []); // 댓글 상태에 저장
        setLoading(false);
      } else {
        // Firestore에서 데이터 가져오기
        const docRef = doc(db, "questions", id);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const questionData = docSnap.data();
            setQuestion(questionData); // 질문 상태에 저장
            setCommentList(questionData.commentBox || []); // 댓글 상태에 저장

            // 로컬스토리지에 저장
            const updatedData = storedData ? JSON.parse(storedData) : {};
            updatedData[id] = questionData;
            localStorage.setItem("QUESTION", JSON.stringify(updatedData));
          } else {
            console.log("No such document!");
          }
          setLoading(false);
        } catch (error) {
          console.error("Error getting document:", error);
          setLoading(false);
        }
      }
    };

    fetchQuestion();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formText.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    try {
      const docRef = doc(db, "questions", id);
      const newComment = {
        formText: formText.trim(),
      };

      // Firestore에 댓글 추가
      await updateDoc(docRef, {
        commentBox: arrayUnion(newComment),
      });

      // Firestore에서 최신 데이터 가져오기
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const updatedQuestion = docSnap.data();
        
        // 로컬 상태 업데이트
        setCommentList(updatedQuestion.commentBox || []);

        // 로컬 스토리지 업데이트
        const storedData = localStorage.getItem("QUESTION");
        const storedQuestion = storedData ? JSON.parse(storedData) : {};
        storedQuestion[id] = updatedQuestion;
        localStorage.setItem("QUESTION", JSON.stringify(storedQuestion));
      }

      setFormText(""); // 입력 필드 초기화
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("댓글을 추가하는 중 오류가 발생했습니다.");
    }
  };
  console.log("commentList:", commentList);
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
          {(Array.isArray(commentList) ? commentList : []).map((commentItem, idx) => (
            <li key={idx} className={`${CheckQuestionCss.commentItem}`}>
              <div className={`${CheckQuestionCss.commentImg}`}>
                <span className={`${CheckQuestionCss.tempImg}`}></span>
              </div>
              <div className={`${CheckQuestionCss.commentN_T}`}>
                <h1 className={`${CheckQuestionCss.commentName}`}>
                  {question.author || "익명"}
                </h1>
                <textarea
                  className={`${CheckQuestionCss.commentText}`}
                  id="textModify"
                  type="text"
                  name="text"
                  value={commentItem.formText}
                  readOnly
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
                      id={id}
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
