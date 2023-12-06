import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style";
import { CircleRating, ScrollablePeople } from "./index";
import { FaList, FaHeart, FaBookmark, FaStar, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>

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
                                <div className="flex flex-row py-4">
                                    <CircleRating rating={movie.vote_average} />
                                    <ul className="ml-8 inline-flex items-center space-x-4">
                                        <Link><li className="rounded-full bg-blue-950 p-4"><FaList className="text-white"/></li></Link>
                                        <Link><li className="rounded-full bg-blue-950 p-4"><FaHeart /></li></Link>
                                        <Link><li className="rounded-full bg-blue-950 p-4"><FaBookmark /></li></Link>
                                        <Link><li className="rounded-full bg-blue-950 p-4"><FaStar /></li></Link>
                                        <Link><li className="text-white flex items-center transition hover:opacity-50"><FaPlay className="pr-2"/>Play Trailer</li></Link>
                                    </ul>
                                </div>
                                <p className="italic text-neutral-300">{movie.tagline}</p>
                                <p className="font-semibold text-lg">Overview</p>
                                <p className="text-white">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.paddingX} py-4 grid grid-cols-4 sm:py-8`}>
                        <div className="col-span-3">
                            <ScrollablePeople title="Cast" link={`https://api.themoviedb.org/3/movie/${id}/credits`} options={[]} />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-bold">Status</h3>
                            <p>{movie.status}</p>
                            <h3 className="font-bold">Original Language</h3>
                            <p>{movie.original_language}</p>
                            <h3 className="font-bold">Budget</h3>
                            <p>${movie.budget}</p>
                            <h3 className="font-bold">Revenue</h3>
                            <p>${movie.revenue}</p>
                            <div>
                                <h3 className="font-bold">Production Companies</h3>
                                <div className="flex flex-col space-y-2">
                                    {movie.production_companies.map((company, index) => (
                                        <div key={index} >
                                            <p>{company.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
};

export default MovieDescription;
