import React, { useEffect } from "react";
import styles from "../style";
// import REACT_APP_TMDB_API_KEY from "../env";
import { Card } from "./index";

const TopRated = () => {

    const [topRated, setTopRated] = React.useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=de015c833c7c3bc03c8a7037876358a7&language=en-US&page=1')
            .then(response => response.json())
            .then(response =>
                setTopRated(response.results)
            )
            .catch(err => console.error(err));
    });

    return (
        <div className={`${styles.marginX}`}>
            <h1 className={`pt-4 pb-5 font-bold text-xl`}>Top Rated Movies</h1>
            <div className={`${styles.marginX} flex overflow-x-auto`}>
                {topRated.map((movie, index) => (
                    <Card
                        key={index}
                        title={movie.title}
                        description={movie.overview}
                        image={movie.poster_path}
                        id={movie.id}
                    />
                ))}
            </div>
            <div>

            </div>
        </div>
    );
}

export default TopRated;