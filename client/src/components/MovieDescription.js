import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style";

const MovieDescription = () => {
    const [movie, setMovie] = useState();

    const { id } = useParams();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=de015c833c7c3bc03c8a7037876358a7&language=en-US&page=1')
            .then(response => response.json())
            .then(response =>
                setMovie(response)
            )
            .catch(err => console.error(err));
    });
    return (
        <div className={`relative h-[30rem] w-full z-0`}>
            {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="object-cover h-full w-full absolute z-10"></img> */}
            <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
                <div className={`${styles.paddingX}`}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="object-contain shadow-lg rounded-md"></img>
                </div>
                <div>
                    <h1 className="text-3xl text-black font-bold">{movie.title}</h1>
                    <h2 className="text-xl text-black font-semibold">Overview</h2>
                    <p className="text-black">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDescription;
