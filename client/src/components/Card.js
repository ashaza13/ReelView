import React from 'react';
import styles from '../style.js';
import { Link } from 'react-router-dom';
import { CircleRating } from './index.js';

const Card = ({ title, image, releaseDate, rating, id }) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div>
            <div className={`flex flex-col pl-5 gap-2 pb-4`}>
                <Link to={`/movie/${id}`}><img className={`w-[150px] h-[225px] shadow-md transition rounded-md hover:scale-[1.02]`} src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} /></Link>
                <div className={`flex flex-col px-3 w-[150px]`}>
                    <h1 className="font-bold">{title}</h1>
                    <p className="text-sm text-light text-gray-600">{new Date(releaseDate).toLocaleDateString('en-US', options)}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;