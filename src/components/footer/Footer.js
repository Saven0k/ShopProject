import './footer.css'
import logo from  './images/iconsSocial.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="left-footer">
                <p>© 2023 Brand All Rights Reserved.</p>
            </div>
            <div className="right-footer">
                <img src={logo} alt=""/>
            </div>
        </footer>
    )
}

export default Footer;