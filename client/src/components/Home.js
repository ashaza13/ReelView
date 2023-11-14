import React from "react";
import { Hero, Movies, Carousel, TopRated } from './index.js';

const Home = () => {
    return (
        <>
            <Hero />
            <Movies />
            <Carousel />
            <TopRated />
        </>
    );
};

export default Home;