import React, { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Carousel = () => {
    const [movies, setMovies] = useState([]);

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) {
            setCurrent(4);
        } else {
            setCurrent(current - 1);
        }
    }

    let nextSlide = () => {
        if (current === 4) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=de015c833c7c3bc03c8a7037876358a7&language=en-US&page=1')
            .then(response => response.json())
            .then(response =>
                setMovies(response.results)
            )
            .catch(err => console.error(err));
    });

    return (
        <div className={`overflow-hidden relative h-96`}>
            <div className={`flex transition ease-out`} style={{transform: `translateX(-${current * 100}%)`}}>
                {movies.slice(0, 5).map((movie, index) => (
                    <CarouselCard key={index} title={movie.title} image={movie.backdrop_path} description={movie.overview} releaseDate={movie.release_date} trailer={movie.video} />
                    // <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="w-full h-1/5" />
                ))}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <AiFillLeftCircle />
                </button>
                <button onClick={nextSlide}>
                    <AiFillRightCircle />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
               {movies.slice(0, 5).map((movie, index) => (
                 <div onClick={() => (
                    setCurrent(index)
                 )} key={"circle" + index} className={`rounded-full w-2 h-2 cursor-pointer ${index==current ? "bg-white" : "bg-gray-500" }`}></div>
               ))}
            </div>

        </div>
    );
};

export default Carousel;