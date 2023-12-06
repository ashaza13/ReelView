import React, { useEffect } from "react";
import styles from "../style";
import { Card } from "./index";

const api_key = "de015c833c7c3bc03c8a7037876358a7";

const ScrollablePeople = ({ title, link }) => {

    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        console.log(link);
        fetch(`${link}?api_key=${api_key}&language=en-US&page=1`)
            .then(response => response.json())
            .then(response => {
                setMovies(response.cast);
                setLoading(false);
                console.log(title);
            }
            )
            .catch(err => console.error(err));
    }, []);

    if (loading) {
        return <div>Loading...</div>
    } else {

        return (
            <div className={`${styles.marginX}`}>
                <div className="flex pt-4 pb-5 items-center">
                    <h1 className={`font-bold text-xl`}>{title}</h1>
                </div>
                <div className={`flex overflow-x-auto`}>
                    {movies.map((movie, index) => (
                        <Card
                            key={index}
                            title={movie.title}
                            description={movie.overview}
                            image={movie.profile_path}
                            id={movie.id}
                            releaseDate={movie.release_date}
                            rating={movie.vote_average}
                        />
                    ))}
                </div>
            </div>
        );

    }
}

export default ScrollablePeople;