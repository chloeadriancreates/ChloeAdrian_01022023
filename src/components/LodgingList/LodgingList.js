import "./LodgingList.scss";
import LodgingCard from "../LodgingCard/LodgingCard";

function LodgingList(props) {
    return (
        <div className="lodgingList">
            {props.lodgings.map(lodging => <LodgingCard key={lodging.id} data={lodging} />)}
        </div>
    );
}

export default LodgingList;