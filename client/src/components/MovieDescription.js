import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style";
import { CircleRating } from "./index";

const MovieDescription = () => {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=de015c833c7c3bc03c8a7037876358a7&language=en-US&page=1')
            .then(response => response.json())
            .then(response => {
                setMovie(response);
                setLoading(false);
            })
            .catch(err => console.error(err));
    });

    const convertTime = (minutes) => {
        let hours = Math.floor(minutes / 60);
        let mins = minutes % 60;
        return hours + "h " + mins + "m";
    }

    {
        if (loading) {
            return <div>Loading...</div>
        } else {
            return (
                <>
                    <div
                        className="relative h-[35rem]"
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

                        <div className={`absolute flex-2 flex items-center justify-center text-white ${styles.paddingX}`}>
                            <div className="max-w-sm p-8">
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="mb-4 rounded-md shadow-md hover:blur-sm transition duration-500 " />
                            </div>
                            <div>
                                <h2 className="flex text-4xl font-bold mb-2">{movie.title}<p className="font-light pl-2">({movie.release_date.slice(0, 4)})</p></h2>
                                <div className="flex space-x-2 font-light">
                                    <p>{new Date(movie.release_date).toLocaleDateString('en-US')}</p>
                                    {movie.genres.map((genre, index) => (
                                        index === movie.genres.length - 1 ?
                                            <p key={index} className="mr-2">{genre.name}</p> :
                                            <p key={index} className="mr-2">{genre.name},</p>
                                    ))}
                                    <p>{convertTime(movie.runtime)}</p>
                                </div>
                                <div className="flex py-4">
                                    <CircleRating rating={movie.vote_average} />
                                </div>
                                <p className="italic text-neutral-300">{movie.tagline}</p>
                                <p className="font-semibold text-lg">Overview</p>
                                <p className="text-white">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.paddingX} ${styles.paddingY}`}>
                        <div className="">
                            <h1 className="text-3xl font-bold">Cast</h1>

                        </div>
                    </div>
                </>
            );
        }
    }
};

export default MovieDescription;


                // <div className={`(bg-[url(https://image.tmdb.org/t/p/original${movie.backdrop_path})] relative h-[30rem] w-full z-0`}>
                //     {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="object-cover h-full w-full absolute z-10 mix-blend-overlay"></img> */}
                //     <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
                //         <div className={`${styles.paddingX}`}>
                //             <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="object-contain shadow-lg rounded-md"></img>
                //         </div>
                //         <div>
                //             <h1 className="text-3xl text-white font-bold">{movie.title}</h1>
                //             <h2 className="text-xl text-white font-semibold">Overview</h2>
                //             <p className="text-black">{movie.overview}</p>
                //         </div>
                //     </div>
                // </div>
