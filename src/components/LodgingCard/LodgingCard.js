import "./LodgingCard.scss";
import { Link } from "react-router-dom";

function LodgingCard(props) {
    const { data } = props;
    const { id, title, cover } = data;

    return (
        <Link to={`/lodging/${id}`} state={{ data: data }}
        className="lodging" style={ {backgroundImage: `url(${cover})`} }>
            <h3 className="lodging-title">{title}</h3>
        </Link>
    );
}

export default LodgingCard;