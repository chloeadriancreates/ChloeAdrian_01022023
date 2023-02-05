import "./LodgingCard.scss";
import { Link } from "react-router-dom";

function LodgingCard(props) {
    const { id, title, cover } = props.data;

    return (
        <Link to={`/lodging/${id}`} state={{ data: props.data }} className="lodging" style={ {backgroundImage: `url(${cover})`} }>
            <h3 className="lodging-title">{title}</h3>
        </Link>
    );
}

export default LodgingCard;