import NewsCss from '../assets/css/news.module.css';

const News = () => {
    return (
        <section className={`main_section ${NewsCss.section}`}>
            <div>
                <input className={`${NewsCss.search}`} type="text" placeholder='뉴스 검색' />
            </div>
            <ul className={`${NewsCss.newsList}`}>
                <li className={`border ${NewsCss.newsItem}`}>뉴스1</li>
                <li className={`border ${NewsCss.newsItem}`}>뉴스2</li>
                <li className={`border ${NewsCss.newsItem}`}>뉴스3</li>
                <li className={`border ${NewsCss.newsItem}`}>뉴스4</li>
                <li className={`border ${NewsCss.newsItem}`}>뉴스5</li>
                <li className={`border ${NewsCss.newsItem}`}>뉴스6</li>
            </ul>
        </section>
    )
}

export default News;