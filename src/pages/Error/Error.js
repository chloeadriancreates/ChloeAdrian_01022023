import "./Error.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <Header />
            <div className="error">
                <h1 className="error-title">404</h1>
                <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="error-link" to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    );
}

export default Error;