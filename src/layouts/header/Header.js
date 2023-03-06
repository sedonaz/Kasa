import React from 'react';
import "./Header.scss";
import logo from '../../assets/images/Logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo"/>
            <nav>
                <NavLink to="/" className="lienAc lien__menu">Accueil</NavLink>
                <NavLink to="/about" className="lienAp lien__menu">À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;