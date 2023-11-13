import React from "react";
import styles from "../style";
// import REACT_APP_TMDB_API_KEY from "../env";
import { Card } from "./index";

const Movies = () => {
    return (
        <div className={`${styles.marginY}`}>
            <div className={`${styles.flexStart}`}>
                <h1 className="font-">Popular Movies</h1>
            </div>
        </div>
    );  
}

export default Movies;