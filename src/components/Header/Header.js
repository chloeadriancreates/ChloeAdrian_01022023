import "./Header.scss";
import logo from "../../assets/logo.svg";

function Header() {
    return (
        <header className="header">
            <img className="header-logo" src={logo} alt="Logo de Kasa" />
            <nav className="header-nav">
                <p className="header-nav-link">Accueil</p>
                <p className="header-nav-link">À propos</p>
            </nav>
        </header>
    );
}

export default Header;