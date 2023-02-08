import "./Carousel.scss";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

function Carousel(props) {
    const { pictures } = props;
    const [index, setIndex] = useState(0);

    const previousImage = () => {
        if(index === 0) {
            setIndex(pictures.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const nextImage = () => {
        if(index === pictures.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    return (
        <div className="carousel">
            { pictures.length > 1 &&
                <div className="carousel-arrows">
                    <button className="carousel-arrows-box carousel-arrows-box-previous" onClick={previousImage}>
                        <img className="carousel-arrows-box-arrow carousel-arrows-box-arrow-previous" src={arrow} alt="Précédent" />
                    </button>
                    <button className="carousel-arrows-box carousel-arrows-box-next" onClick={nextImage}>
                        <img className="carousel-arrows-box-arrow carousel-arrows-box-arrow-next" src={arrow} alt="Suivant" />
                    </button>
                </div>
            }
            <p className="carousel-counter">{index + 1}/{pictures.length}</p>
            <img className="carousel-image" src={pictures[index]} alt="" />
        </div>
    );
}

export default Carousel;