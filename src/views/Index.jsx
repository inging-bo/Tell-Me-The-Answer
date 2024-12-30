import IndexCss from '../assets/css/index.module.css';

import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section className={`main_section ${IndexCss.section}`}>
      <div className={`border ${IndexCss.account}`}>
        <h2><Link to={"/account"}>자산</Link></h2>
      </div>
      <div className={`border ${IndexCss.finance}`}>
        <h2><Link to={"/finance"}>가계부</Link></h2>
      </div>
      <div className={`border ${IndexCss.news}`}>
        <h2><Link to={"/news"}>경제뉴스</Link></h2>
      </div>
    </section>
  );
};

export default Index;
