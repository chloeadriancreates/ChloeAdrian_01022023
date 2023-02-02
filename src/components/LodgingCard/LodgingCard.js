import "./LodgingCard.scss";

function LodgingCard(props) {
    const { title, cover } = props.data;

    return (
        <div className="lodging" style={ {backgroundImage: `url(${cover})`} }>
            <h3 className="lodging-title">{title}</h3>
        </div>
    );
}

export default LodgingCard;