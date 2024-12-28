import FooterCss from '../assets/css/footer.module.css'

const Footer = () => {
    return (
        <footer>
            <p className="logo m0">Money Planet</p>
            <p className={`${FooterCss.item} m0`}>CONTACT : <span><a href="mailto:thervv@kakao.com">thervv@kakao.com</a></span></p>
            <p className={`${FooterCss.item} m0`}>COPYRIGHT By inging_bo</p>
            <p className={`${FooterCss.item} m0`}>Money Planet</p>
        </footer>
    )
}

export default Footer;