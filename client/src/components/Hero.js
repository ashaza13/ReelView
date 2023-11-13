import React from "react";

const Hero = () => {
    return (
        <>
            <div className={`relative h-auto w-auto flex flex-col`}>
                <div className={`bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto top-0 left-0 right-0 opacity-100 z-10`}>
                    Hello
                </div>
            </div>
        </>
    );
};

export default Hero;