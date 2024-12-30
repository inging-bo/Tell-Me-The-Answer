import AccountCss from '../assets/css/account.module.css';

const Account = () => {
    return (
        <section className={`main_section ${AccountCss.section}`}>
            {/* 계좌 잔액 영역 */}
            <div className={`${AccountCss.totalAccountBox}`}>
                <p className={`${AccountCss.item}`}>계좌 잔액</p>
                <p className={`${AccountCss.item, AccountCss.price}`}><span>0,000,000원</span></p>
            </div>

            {/* 은행리스트 영역 */}
            <div className={`${AccountCss.bankList}`}>
                <div className={`border ${AccountCss.bankItem}`}><span>00은행</span><span>0,000,000원</span></div>
                <div className={`border ${AccountCss.bankItem}`}><span>00은행</span><span>0,000,000원</span></div>
                <div className={`border ${AccountCss.bankItem}`}><span>00은행</span><span>0,000,000원</span></div>
            </div>
        </section>
    )
}

export default Account;