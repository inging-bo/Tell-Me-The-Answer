
import LoginCss from '../../assets/css/login.module.css'

const Login = () => {
    return (
        <div className="loginModalBox">
            {/* 뒷배경 */}
            <label htmlFor="login" className="loginModal"></label>

            {/* 로그인 폼 */}
            <form className={`border ${LoginCss.loginForm}`} method="get">
                <h2 className={`${LoginCss.title}`}>Money Planet</h2>
                <div className={`${LoginCss.inputBox}`}>
                    <input type="text" className={`${LoginCss.id}`} placeholder="이메일을 입력해주세요" />
                    <input type="text" className={`${LoginCss.pw}`} placeholder="비밀번호를 입력해주세요" />
                </div>
                <div className={`${LoginCss.orBox}`}>
                    <span className={`${LoginCss.or}`}>또는</span>
                </div>
                <div className={`border ${LoginCss.other}`}>Google로 시작하기</div>
                <div className={`border ${LoginCss.other}`}>Facebook으로 시작하기</div>
                <div className={`border ${LoginCss.other}`}>카카오로 시작하기</div>
                <label htmlFor="signUp" className={`signUpBtn ${LoginCss.signUpBtn}`}>회원가입하기</label>
                <button className={`border ${LoginCss.loginBtn}`} type="submit">로그인</button>
            </form>
        </div>
    )
}

export default Login;