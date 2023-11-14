import React from "react";

const CarouselCard = ({title, image, description, releaseDate, trailer}) => {
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/original${image}`} className="object-cover h-full w-full mix-blend-overlay" />
        </>
    );
};

export default CarouselCard;