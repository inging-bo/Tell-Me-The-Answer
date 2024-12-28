import { Link } from "react-router-dom";
// import headerCss from "../assets/css/header.module.css"
const Header = () => {
    return (
        <header>
            <Link to={"/"} className="logo">Money Planet</Link>
            <nav>
                <Link to={"/account"}>자산</Link>
                <Link to={"/finance"}>가계부</Link>
                <Link to={"/news"}>경제뉴스</Link>
                <button>로그인</button>
            </nav>
        </header>
    )
}

export default Header;