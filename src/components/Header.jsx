import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to={"/"} className="logo">
        Tell Me The Answer
      </Link>
      <nav>
        <Link to={"/notice"} className="navItem notice"></Link>
        <Link to={"/login"} className="navItem login"></Link>
      </nav>
    </header>
  );
};


