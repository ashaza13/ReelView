import React from "react";

const CarouselCard = ({ title, image, description, releaseDate, trailer }) => {
    return (
        <div
            className="relative h-[35rem] w-screen"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            Hello
        </div>
        // <img src={`https://image.tmdb.org/t/p/original${image}`} className="object-cover h-full w-full" />

    );
};

export default CarouselCard;