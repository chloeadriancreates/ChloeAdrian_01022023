import "./Error.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="error">
            <Header />
            <div className="error-message">
                <h1 className="error-message-title">404</h1>
                <p className="error-message-content">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link className="error-link" to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default Error;