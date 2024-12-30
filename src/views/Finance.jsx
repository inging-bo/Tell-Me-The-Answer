import FinanceCss from '../assets/css/finance.module.css';

const Finance = () => {
    return (
        <section className={`main_section ${FinanceCss.section}`}>
            <div className={`${FinanceCss.totalAccountBox}`}>
                {/* 현재 월 표시 */}
                <div className={`${FinanceCss.monthBox}`}>
                    <span>←</span><span>12월</span><span>→</span>
                </div>

                {/* 지출 수입 확인 */}
                <div className={`${FinanceCss.allCount}`}>
                    <div>지출 <span>0,000,000원</span></div>
                    <div>수입 <span>0,000,000원</span></div>
                </div>
            </div>

            {/* 사용처 확인 */}
            <div className={`${FinanceCss.moneyHistoryBox}`}>
                <div className={`${FinanceCss.dayBox}`}>
                    <span>26일</span><span>오늘</span>
                </div>
                <div className={`${FinanceCss.useList}`}>
                    <div className={`border ${FinanceCss.useItem}`}><span>사용처</span><span>0,000,000원</span></div>
                    <div className={`border ${FinanceCss.useItem}`}><span>사용처</span><span>0,000,000원</span></div>
                </div>
            </div>
            <div className={`${FinanceCss.moneyHistoryBox}`}>
                <div className={`${FinanceCss.dayBox}`}>
                    <span>26일</span><span>오늘</span>
                </div>
                <div className={`${FinanceCss.useList}`}>
                    <div className={`border ${FinanceCss.useItem}`}><span>사용처</span><span>0,000,000원</span></div>
                    <div className={`border ${FinanceCss.useItem}`}><span>사용처</span><span>0,000,000원</span></div>
                </div>
            </div>
        </section>
    )
}

export default Finance;