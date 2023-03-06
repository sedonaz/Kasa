import React from 'react';
import"./AboutBanner.scss";
const BanniereAp = ({texte}) => {
    return (
        <div className="banniereAp">
            <div className="banniereAp__cover"></div>
            <span className="banniereAp__txt">{texte}</span>
        </div>
    );
};

export default BanniereAp;
