import { useEffect } from 'react';
import NoticeCss from '../assets/css/notice.module.css';

const Notice = () => {
    return (
        <section className={`noticeSection ${NoticeCss.noticeSection}`}>
            <ul className={`${NoticeCss.noticeList}`}>
                <li className={`border ${NoticeCss.noticeItem}`}>
                    <h1 className={`${NoticeCss.title}`}><span className={`${NoticeCss.nickName}`}>00</span>님이 댓글을 달았습니다을 달았습니다을 달았습니다을 달았습니다.</h1>
                    <p className={`${NoticeCss.answer}`}>댓글 내용용용용용용용내용용용용용용용용용용용용용용용용용용용</p>
                    <div className={`${NoticeCss.clsBtn}`}></div>
                </li>
            </ul>
        </section>
    )
}

export default Notice;