import React from 'react';
import "./BannerAcceuil.scss";
const BanniereAcc = ({ texte}) => {
    return (
        <div className="banniere">
            <div className="banniere__cover"></div>
            <span className="banniere__txt">{texte}</span>
        </div>
    );
};

export default BanniereAcc;







