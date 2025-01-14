import { Route, Routes } from "react-router-dom"
import Index from "../views/Index";
import CreateQuestion from "../views/CreateQuestion";
import CheckQuestion from "../views/CheckQuestion";
import SignUp from "../views/SignUp";
import Login from "../views/Login";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/checkQuestion/:id" element={<CheckQuestion />}/>
            <Route path="/createQuestion" element={<CreateQuestion />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/SignUp" element={<SignUp />}/>
        </Routes>
    )
}

export default Router;