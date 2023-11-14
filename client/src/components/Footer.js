import styles from "../style";
import React from "react";

const Footer = () => {
    return (
        <section className={`bg-neutral-900 text-white ${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img src="" 
                    alt="ReelView" 
                    className="w-[266px] h-[72px] object-contain" 
                    />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>An easy way to find new Movies and TV Shows, and review ones that you've already seen.</p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">

                </div>
            </div>
        </section>
    );
};

export default Footer;