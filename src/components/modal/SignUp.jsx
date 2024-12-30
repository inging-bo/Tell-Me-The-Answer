import SignUpCss from "../../assets/css/signUp.module.css"

const SignUp = () => {
    return (
        <div className="signUpModalBox">
            <label htmlFor="signUp" className="signUpModal"></label>
            <form className={`${SignUpCss.signUpForm}`}>
                <h2>회원가입</h2>
                <div>
                    <input type="text" placeholder="id" />
                    <input type="text" placeholder="password" />
                </div>
                <button type="submit">회원가입 완료</button>
            </form>
        </div>
    )
}

export default SignUp;