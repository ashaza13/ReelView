import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const MovieDescription = () => {
    const [movie, setMovie] = useState();

    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    );
};

export default MovieDescription;
