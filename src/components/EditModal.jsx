import EditModalCss from "../assets/css/EditModal.module.css";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../firebase"; // Firestore 초기화 경로에 맞게 수정

export const EditModal = ({
  setCommentList,
  setShowEditId,
  formTexts,
  id,
}) => {
  // 댓글 삭제 함수
  const itemDelete = async () => {
    try {
      // Firestore에서 댓글 삭제
      const docRef = doc(db, "questions", id);
      const targetComment = { date: formTexts.date, formText: formTexts.formText }; // 고유 ID와 텍스트를 포함한 객체
      await updateDoc(docRef, {
        commentBox: arrayRemove(targetComment), // 정확히 매칭되는 객체만 제거
      });

      // 로컬 상태에서 댓글 삭제
      setCommentList((prevCommentList) =>
          prevCommentList.filter((comment) => comment.date !== formTexts.date)
      );

      // 로컬 스토리지에서 댓글 삭제
      const storedData = localStorage.getItem("QUESTION");
      const storedQuestion = storedData ? JSON.parse(storedData) : {};
      console.log(storedQuestion.commentBox)
      if (storedQuestion[id]) {
        storedQuestion[id].commentBox = storedQuestion[id].commentBox.filter(
            (comment) => comment.date !== formTexts.date
        );
        localStorage.setItem("QUESTION", JSON.stringify(storedQuestion));
      }

      setShowEditId(null); // 모달 닫기
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <aside className={`${EditModalCss.back}`}>
      <ul className={`${EditModalCss.editBox}`}>
        <li onClick={itemDelete} className={`${EditModalCss.del}`}>
          삭제
        </li>
      </ul>
    </aside>
  );
};
