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
                    <button className="carousel-arrows-arrow carousel-arrows-arrow-previous" onClick={previousImage}>
                        <img src={arrow} alt="Précédent" />
                    </button>
                    <button className="carousel-arrows-arrow carousel-arrows-arrow-next" onClick={nextImage}>
                        <img src={arrow} alt="Suivant" />
                    </button>
                </div>
            }
            <p className="carousel-counter">{index + 1}/{pictures.length}</p>
            <img className="carousel-image" src={pictures[index]} alt="" />
        </div>
    );
}

export default Carousel;