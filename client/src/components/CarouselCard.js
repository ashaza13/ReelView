import React from "react";

const CarouselCard = ({title, image, description, releaseDate, trailer}) => {
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/original${image}`} className="relative w-full h-1/5" />
            <div className={`absolute`}>
                <h1 className={`text-2xl font-bold text-white`}>{title}</h1>
            </div>
        </>
    );
};

export default CarouselCard;