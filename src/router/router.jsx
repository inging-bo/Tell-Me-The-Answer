import { Route, Routes } from "react-router-dom"
import Index from "../views/Index";
import Notice from "../views/Notice";
import CreateQuestion from "../views/CreateQuestion";
import CheckQuestion from "../views/CheckQuestion";
import SignUp from "../views/SignUp";
import Login from "../views/Login";
import { useState } from "react";

const Router = () => {
    const [questions, setQuestions] = useState([]);
    
    // 질문 추가 함수
    const addQuestion = (newQuestion) => {
      setQuestions((prevQuestions) => [newQuestion, ...prevQuestions]);
    };
    return (
        <Routes>
            <Route path="/" element={<Index questions={questions}/>}/>
            <Route path="/checkQuestion/:id" element={<CheckQuestion questions={questions} />}/>
            <Route path="/createQuestion" element={<CreateQuestion addQuestion={addQuestion}/>}/>
            <Route path="/Notice" element={<Notice />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/SignUp" element={<SignUp />}/>
        </Routes>
    )
}

export default Router;