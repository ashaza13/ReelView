import React from "react";
import { Hero, ScrollableMovies, Carousel } from '../components/index.js';

const popularOptions = ["Today", "Tomorrow"];
const topRatedOptions = ["Today", "Tomorrow"];

const Home = () => {


    return (
        <>
            <Hero />
            <ScrollableMovies title="Popular Movies" link="https://api.themoviedb.org/3/movie/popular" options={popularOptions}/>
            <Carousel />
            <ScrollableMovies title="Top Rated Movies" link="https://api.themoviedb.org/3/movie/top_rated" options={topRatedOptions}/>
        </>
    );
};

export default Home;