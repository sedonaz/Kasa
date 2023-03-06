import React from 'react';
import "./Vignette.scss";
const Vignette = ({image, titre}) => {
    return (
            <div className="vignette">
                <img src={image} alt="" className="vignette__img" />
                <div className="vignette__cover"></div>
                <h2 className="vignette__titre">{titre}</h2>
            </div>
    );
};

export default Vignette;