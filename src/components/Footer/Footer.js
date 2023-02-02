import "./Footer.scss";
import logo from "../../assets/logoWhite.svg";

function Footer() {
    return(
        <footer className="footer">
            <img className="footer-logo" src={logo} alt="Logo de Kasa" />
            <p className="footer-credits">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;