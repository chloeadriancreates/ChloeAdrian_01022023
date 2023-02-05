import "./LodgingDetails.scss";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";

function LodgingDetails() {
    const loc = useLocation();
    const { title, location, tags, host, rating, description, equipments } = loc.state.data;

    return (
        <div>
            <Header />
            <div className="description">
                <header className="description-header">
                    <div className="description-header-title">
                        <h1 className="description-header-title-main">{title}</h1>
                        <p className="description-header-title-location">{location}</p>
                    </div>
                    <div className="description-header-host">
                        <p className="description-header-host-name">{host.name}</p>
                        <img className="description-header-host-picture" src={host.picture} alt={host.name} />
                    </div>
                </header>
                <div className="description-filters">
                    <div className="description-filters-taglist">
                        {tags.map((tag, index) => <Tag key={index} tag={tag} className="description-filters-taglist-tag" />)}
                    </div>
                    <div className="description-filters-rating">{rating}</div>
                </div>
                <div className="description-details">
                    <div className="description-details-column">
                        <Collapse title="Description" content={description} size="small" />
                    </div>
                    <div className="description-details-column">
                        <Collapse title="Équipements" content={equipments} size="small" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LodgingDetails;