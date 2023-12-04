import React, { useEffect } from "react";
import styles from "../style";
// import REACT_APP_TMDB_API_KEY from "../env";
import { Card } from "./index";

const Movies = () => {

    const [popularMovies, setPopularMovies] = React.useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=de015c833c7c3bc03c8a7037876358a7&language=en-US&page=1')
            .then(response => response.json())
            .then(response =>
                setPopularMovies(response.results)
            )
            .catch(err => console.error(err));
    });

    return (
        <div className={`${styles.marginX}`}>
            <h1 className={`pt-4 pb-5 font-bold text-xl`}>Popular Movies</h1>
            <div className={`${styles.marginX} flex overflow-x-auto`}>
                {popularMovies.map((movie, index) => (
                    <Card
                        key={index}
                        title={movie.title}
                        description={movie.overview}
                        image={movie.poster_path}
                        id={movie.id}
                        releaseDate={movie.release_date}
                        rating={movie.vote_average}
                    />
                ))}
            </div>
            <div>

            </div>
        </div>
    );
}

export default Movies;