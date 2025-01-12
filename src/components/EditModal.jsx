import EditModalCss from "../assets/css/EditModal.module.css";

export const EditModal = ({
  idx,
  setCommentList,
  setShowEditId,
  formTexts,
}) => {
  const itemDelete = () => {
    setCommentList((prevCommentList) =>
      prevCommentList.filter(
        (content, index) => index !== idx && content.formText !== formTexts
      )
    );
    setShowEditId(null);
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
