import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "../style";

const Carousel = () => {
    const [movieData, setMovieData] = useState([]);
    const [currentMovie, setCurrentMovie] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=de015c833c7c3bc03c8a7037876358a7&language=en-US&page=1')
            .then(response => response.json())
            .then(response => {
                setMovieData(response.results.slice(0, 5));
                setLoading(false);
                setCurrentMovie(response.results[0]);
            })
            .catch(err => {
                console.error(err);
            });
    }, []); // Empty dependency array ensures this useEffect runs only once on mount

    const updateHover = (movie) => {
        setCurrentMovie(movie);
    }

    if (loading) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div className="relative h-[24rem]">
                <div
                    className="relative h-full flex items-center justify-center transition-opacity duration-500 ease-in-out"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'all 0.5s ease-in-out',
                    }}
                >
                    <div className="absolute inset-0 bg-orange-800 opacity-75 transition duration-500 ease-in-out"></div>

                    <div className="absolute top-0 left-14 p-4 text-white font-bold text-2xl">Latest Trailers</div>

                    <div className={`flex overflow-x-auto space-x-4 items-center ${styles.paddingX}`}>
                        {movieData.map((movie, index) => (
                            <div key={index} className="relative inline-block w-full hover:scale-105 transition" onMouseOver={() => updateHover(movie)}>
                                <div className="flex flex-col items-center justify-center">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                        alt={movie.title}
                                        className="mb-2 rounded-md shadow-md"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <FaPlay className="text-white shadow-md text-4xl cursor-pointer hover:scale-105 transition relative z-10" />
                                    </div>
                                </div>
                                <div className="text-center mt-1">
                                    <p className="text-white font-semibold">{movie.title}</p>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        );
    }


};

export default Carousel;