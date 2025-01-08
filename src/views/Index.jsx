import { Link } from "react-router-dom";
import IndexCss from "../assets/css/index.module.css";
// import { useState } from "react";

// import { Link } from "react-router-dom";

const Index = () => {
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
        <Link
          className={`${IndexCss.createQuestion}`}
          to={"/createQuestion"}
        >+</Link>
      </div>
      <ul className={`${IndexCss.questionList}`}>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/checkQuestion"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>
              제목입니다제목입니다제목입니다제목입니다제목입니다.
            </h1>
            <p className={`${IndexCss.text}`}>
              내용입니다내용입니다내용입니다내용입니다내용입니다.
            </p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>
                작성자작성자작성자작성자작성자 닉네임
              </p>
              <p className={`${IndexCss.comment}`}>3333</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
        <li className={`${IndexCss.questionItem}`}>
          <Link to={"/"} className={`${IndexCss.linkItem}`}>
            <h1 className={`${IndexCss.title}`}>제목입니다.</h1>
            <p className={`${IndexCss.text}`}>내용입니다.</p>
            <div className={`${IndexCss.nameBox}`}>
              <p className={`${IndexCss.Author}`}>작성자 닉네임</p>
              <p className={`${IndexCss.comment}`}>3</p>
            </div>
          </Link>
        </li>
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
