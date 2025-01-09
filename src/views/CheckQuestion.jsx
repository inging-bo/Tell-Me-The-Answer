import { useState } from "react";
import CheckQuestionCss from "../assets/css/checkQuestion.module.css";
import { EditModal } from "../components/EditModal";

const CheckQuestion = () => {
  const [showEdit, setShowEdit] = useState(false);
  const openEditModal = () => {
    setShowEdit(!showEdit);
  };
  return (
    <div
      className={`border checkQuestionSection ${CheckQuestionCss.checkQuestionSection}`}
    >
      <div className={`${CheckQuestionCss.questionBox}`}>
        <h1 className={`${CheckQuestionCss.questionTitle}`}>
          작성된 질문 제목
        </h1>
        <p className={`${CheckQuestionCss.questionText}`}>
          작성된 질문
          {/* 질문 내용작성된작성된 질문 내용작성된 질문 내용작성된 질문 내용작성된
          질문 내용작성된 질문 내용작성된 질문 내용작성된 질문 내용작성된 질문
          내용작성된 질문 내용작성된 질문 내용작성된 질문 내용작성된 질문
          내용작성된 질문 내용작성된 질문 내용작성된 질문 내용작성된 질문
          내용작성된 질문 내용작성된 질문 내용작성된 질문 내용작성된 질문
          내용작성된 질문 내용작성된 질문 내용작성된 질문 내용 */}
        </p>
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
                제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목
              </h1>
              <p className={`${CheckQuestionCss.commentText}`}>
                댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                내용
              </p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
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
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>
                댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                내용댓글댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                내용댓글댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                내용댓글댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글
                내용댓글
              </p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
          <li className={`${CheckQuestionCss.commentItem}`}>
            <div className={`${CheckQuestionCss.commentImg}`}>
              <span className={`${CheckQuestionCss.tempImg}`}></span>
            </div>
            <div className={`${CheckQuestionCss.commentN_T}`}>
              <h1 className={`${CheckQuestionCss.commentName}`}>제목</h1>
              <p className={`${CheckQuestionCss.commentText}`}>댓글 내용</p>
            </div>
            <div className={`${CheckQuestionCss.commentEditBox}`}>
              <span className={`${CheckQuestionCss.edit}`}>•••</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckQuestion;
