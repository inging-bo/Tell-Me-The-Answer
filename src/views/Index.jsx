import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Firebase Firestore 초기화
import IndexCss from "../assets/css/index.module.css";

const Index = () => {
  const [questions, setQuestions] = useState([]); // 질문 데이터를 저장할 상태
  const [loading, setLoading] = useState(true);  // 로딩 상태 관리

  // Firestore에서 질문 데이터를 가져오는 함수
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "questions"));
        const fetchedQuestions = querySnapshot.docs.map((doc) => ({
          id: doc.id,  // 문서 ID를 함께 저장
          ...doc.data(), // Firestore에서 가져온 데이터
        }));
        setQuestions(fetchedQuestions); // 질문 상태 업데이트
        setLoading(false); // 로딩 완료
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <p>Loading questions...</p>; // 로딩 중 표시
  }

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
      <ul className={`questionList ${IndexCss.questionList}`}>
        {questions.map((question) => (
          <li key={question.id} className={`${IndexCss.questionItem}`}>
            <Link to={`/checkQuestion/${question.id}`} className={`${IndexCss.linkItem}`}>
              <h1 className={`${IndexCss.title}`}>{question.title}</h1>
              <p className={`${IndexCss.text}`}>{question.content}</p>
              <div className={`${IndexCss.nameBox}`}>
                <p className={`${IndexCss.Author}`}>{question.author}</p> {/* 작성자 */}
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
