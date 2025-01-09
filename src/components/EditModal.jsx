import EditModalCss from "../assets/css/EditModal.module.css";

export const EditModal = () => {
  return (
    <aside className={`${EditModalCss.back}`}>
      <ul className={`${EditModalCss.editBox}`}>
        <li className={`${EditModalCss.modify}`}>수정</li>
        <li className={`${EditModalCss.del}`}>삭제</li>
      </ul>
    </aside>
  );
};