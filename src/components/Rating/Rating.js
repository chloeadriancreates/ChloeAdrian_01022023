import "./Rating.scss";
import { useEffect, useState } from "react";

function Rating(props) {
    const { rating } = props;
    const leftover = 5 - rating;
    const [ ratingArray, setRatingArray ] = useState([]);
    const [ leftoverArray, setLeftoverArray ] = useState([]);

    const createArray = (rating) => {
        let tempArray = [];
        for(let i = 0; i < rating; i++) {
            tempArray.push(i);
        }
        return tempArray;
    };

    useEffect(() => {
        setRatingArray(createArray(rating));
        setLeftoverArray(createArray(leftover));
    }, [rating, leftover]);

    return (
        <div className="rating">
            {ratingArray.map((star, index) =>
                <svg key={index} className="rating-star rating-star--filled" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
                </svg>
            )}
            {leftoverArray.map((star, index) =>
                <svg key={index} className="rating-star rating-star--empty" width="30" height="30" viewBox="0 0 30 30">
                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
                </svg>
            )}
        </div>
    );
}

export default Rating;