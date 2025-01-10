import EditModalCss from "../assets/css/EditModal.module.css";

export const EditModal = ({ onEdit }) => {
  return (
    <aside className={`${EditModalCss.back}`}>
      <ul className={`${EditModalCss.editBox}`}>
        <li onClick={onEdit} className={`${EditModalCss.modify}`}>
          수정
        </li>
        <li className={`${EditModalCss.del}`}>삭제</li>
      </ul>
    </aside>
  );
};
