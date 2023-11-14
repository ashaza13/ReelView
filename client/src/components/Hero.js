import React from "react";
import styles from "../style";

const Hero = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const click = () => {

    };

    const handleChange = event => {
        setSearchQuery(event.target.value);
    }
    
    return (
        <>
            <div className={`relative h-auto w-auto flex flex-col`}>
                <div className={`bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto top-0 left-0 right-0 opacity-100 z-10`}>
                    <div className={`${styles.paddingX} ${styles.paddingY}`}>
                        <h1 className="text-white font-bold text-5xl">Welcome</h1>
                        <div className={`py-4`}>
                            <p className="text-white text-xl">ReelView is a movie review app that allows users to search for movies and leave reviews for them.</p>
                        </div>
                        <div className={`flex flex-col`}>
                            <input type="text" className={`rounded-full px-5 py-3 transition shadow-md outline-none hover:scale-105`} onChange={handleChange} placeholder="Search for a movie..." name="searchQuery" />
                            {/* <button onClick={click} className={`-m-4`}>Search</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;