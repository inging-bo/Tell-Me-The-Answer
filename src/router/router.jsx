import { Route, Routes } from "react-router-dom"
import Index from "../views/Index";
import Finance from "../views/Finance";
import Account from "../views/Account";
import News from "../views/news";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/account" element={<Account />}/>
            <Route path="/finance" element={<Finance />}/>
            <Route path="/news" element={<News />}/>
        </Routes>
    )
}

export default Router;