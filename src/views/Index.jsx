import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "../firebase";
import IndexCss from "../assets/css/index.module.css";
import { onAuthStateChanged } from "firebase/auth";

const Index = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

    // 서버 데이터와 로컬 데이터를 비교하는 함수
    const updateQuestionsFromServer = (serverData) => {
        const localData = JSON.parse(localStorage.getItem("QUESTION")) || [];

        // 로컬 데이터와 서버 데이터를 문자열로 비교
        const localDataString = JSON.stringify(localData);
        const serverDataString = JSON.stringify(serverData);

        if (localDataString !== serverDataString) {
            // 서버 데이터로 로컬스토리지 갱신
            localStorage.setItem("QUESTION", serverDataString);
            setQuestions(serverData); // 상태 갱신
        } else {
            // 로컬 데이터로 상태 갱신
            setQuestions(localData);
        }

        setLoading(false); // 로딩 상태 해제
    };

    useEffect(() => {
        const q = query(collection(db, "questions"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedQuestions = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            updateQuestionsFromServer(fetchedQuestions); // 서버 데이터와 비교
        });

        return () => unsubscribe();
    }, []);

    // 사용자 로그인 상태 확인
    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user); // 사용자가 있으면 true, 없으면 false
        });

        // 컴포넌트가 언마운트될 때 리스너 정리
        return () => unsubscribeAuth();
    }, []);

    const disassembleHangul = (text) => {
        const cho = [
            "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
            "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
        ];
        const jung = [
            "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ",
            "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ",
        ];
        const jong = [
            "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ",
            "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ",
            "ㅋ", "ㅌ", "ㅍ", "ㅎ",
        ];

        return text.split("").map((char) => {
            const code = char.charCodeAt(0);
            if (code >= 0xac00 && code <= 0xd7a3) {
                const diff = code - 0xac00;
                const choIndex = Math.floor(diff / 588);
                const jungIndex = Math.floor((diff % 588) / 28);
                const jongIndex = diff % 28;
                return cho[choIndex] + jung[jungIndex] + (jong[jongIndex] || "");
            }
            return char;
        }).join("");
    };

    const matchesHangul = (text, query) => {
        const disassembledText = disassembleHangul(text);
        const disassembledQuery = disassembleHangul(query);
        return disassembledText.includes(disassembledQuery);
    };

    const highlightText = (text, query) => {
        if (!query) return text;
        const regex = new RegExp(`(${query.split("").join(".*?")})`, "gi");
        return text.replace(regex, `<mark class="sameLetters">$1</mark>`);
    };

    const filteredQuestions = questions.filter(
        (question) =>
            matchesHangul(question.title, searchQuery) ||
            matchesHangul(question.content, searchQuery)
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    if (loading) {
        return <p>Loading questions...</p>;
    }

    return (
        <section className={`indexSection`}>
            <div className={`${IndexCss.top}`}>
                <input
                    className={`border ${IndexCss.search}`}
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                    required
                />
                {isLoggedIn && (
                    <Link className={`${IndexCss.createQuestion}`} to={"/createQuestion"}>
                        +
                    </Link>
                )}
            </div>
            <ul className={`questionList ${IndexCss.questionList}`}>
                {filteredQuestions.map((question) => (
                    <li key={question.id} className={`${IndexCss.questionItem}`}>
                        <Link
                            to={`/checkQuestion/${question.id}`}
                            className={`${IndexCss.linkItem}`}
                        >
                            <h1
                                className={`${IndexCss.title}`}
                                dangerouslySetInnerHTML={{
                                    __html: highlightText(question.title, searchQuery),
                                }}
                            ></h1>
                            <p
                                className={`${IndexCss.text}`}
                                dangerouslySetInnerHTML={{
                                    __html: highlightText(question.content, searchQuery),
                                }}
                            ></p>
                            <div className={`${IndexCss.nameBox}`}>
                                <p className={`${IndexCss.Author}`}>{question.author}</p>
                                <p className={`${IndexCss.comment}`}>
                                    {question.commentBox.length > 9 ? "9+" : question.commentBox.length}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Index;
