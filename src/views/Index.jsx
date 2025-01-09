import { Link } from "react-router-dom";
import IndexCss from "../assets/css/index.module.css";

const Index = ({ questions }) => {
  return (
    
    <section className={`indexSection`}>
      <div className={`${IndexCss.top}`}>
        <input
          className={`border ${IndexCss.search}`}
          type="text"
          name="search"
          placeholder="Search"
          required
        />
        <Link className={`${IndexCss.createQuestion}`} to={"/createQuestion"}>
          +
        </Link>
      </div>
      <ul className={`${IndexCss.questionList}`}>
        {questions.map((question, index) => (
          <li key={index} className={`${IndexCss.questionItem}`}>
            <Link to={`/checkQuestion/${index}`} className={`${IndexCss.linkItem}`}>
              <h1 className={`${IndexCss.title}`}>{question.title}</h1>
              <p className={`${IndexCss.text}`}>{question.content}</p>
              <div className={`${IndexCss.nameBox}`}>
                <p className={`${IndexCss.Author}`}>{question.index}</p>
                <p className={`${IndexCss.comment}`}>댓글 0</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className={`${IndexCss.arrowBox}`}>
        <div className={`${IndexCss.left} ${IndexCss.arrow}`}></div>
        <ul className={`${IndexCss.pageNation} `}>
          <li className={`${IndexCss.page} ${IndexCss.curPage}`}></li>
          <li className={`${IndexCss.page}`}></li>
          <li className={`${IndexCss.page}`}></li>
        </ul>
        <div className={`${IndexCss.right} ${IndexCss.arrow}`}></div>
      </div>
    </section>
  );
};

export default Index;
