import React from 'react';
import logoFooter from '../../assets/images/logoF.png';
import './Footer.scss';
const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="Logo" />
            <p>&copy; 2022 Kasa. Tous droits réservés</p>
        </footer>
    );
};

export default Footer;