import React from 'react';
import styles from '../style.js';
import { Link } from 'react-router-dom';

const Card = ({ title, image, releaseDate, rating }) => {
    return (
        <div>
            <div className={`flex flex-col pl-5 gap-2 pb-4`}>
                <Link><img className={`w-[150px] h-[225px] shadow-md transition rounded-md hover:scale-[1.02]`} src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} /></Link>
                <div className={`flex flex-col px-3 w-[150px]`}>
                    <h1 className="font-bold">{title}</h1>
                    <p className="text-sm">{releaseDate}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;