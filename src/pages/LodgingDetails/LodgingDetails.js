import "./LodgingDetails.scss";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";

function LodgingDetails() {
    const loc = useLocation();
    const { pictures, title, location, tags, host, rating, description, equipments } = loc.state.data;

    return (
        <div>
            <Header />
            <Carousel pictures={pictures} />
            <div className="description">
                <header className="description-header">
                    <div className="description-header-title">
                        <h1 className="description-header-title-main">{title}</h1>
                        <p className="description-header-title-location">{location}</p>
                    </div>
                    <div className="description-header-taglist">
                        {tags.map((tag, index) => <Tag key={index} tag={tag} className="description-filters-taglist-tag" />)}
                    </div>
                </header>
                <div className="description-details">
                    <div className="description-details-host">
                        <p className="description-details-host-name">{host.name}</p>
                        <img className="description-details-host-picture" src={host.picture} alt={host.name} />
                    </div>
                    <Rating rating={rating} />
                </div>
            </div>
            <div className="additional">
                    <div className="additional-column">
                        <Collapse title="Description" content={description} size="small" />
                    </div>
                    <div className="additional-column">
                        <Collapse title="Équipements" content={equipments} size="small" />
                    </div>
            </div>
            <Footer />
        </div>
    );
}

export default LodgingDetails;