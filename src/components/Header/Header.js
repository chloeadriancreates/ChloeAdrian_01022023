import "./Header.scss";
import logo from "../../assets/logoPink.svg";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img className="header-logo" src={logo} alt="Logo de Kasa" />
            <nav className="header-nav">
                <NavLink to="/"
                    className={({ isActive }) =>
                        isActive ? "header-nav-link header-nav-link--active" : "header-nav-link"
                    }
                >
                    Accueil
                </NavLink>
                <NavLink to="/about"
                    className={({ isActive }) =>
                        isActive ? "header-nav-link header-nav-link--active" : "header-nav-link"
                    }
                >
                    À propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;