import React from 'react';
import './Home.scss';
import Header from '../../layouts/header/Header';
import Appartements from '../../assets/api/appartements.json';
import { NavLink } from 'react-router-dom';
import BanniereAcc from'../../components/bannerAcc/BannerAcceuil';
import Vignette from '../../components/vignette/Vignette';
import Footer from '../../layouts/footer/Footer';

const Home = () => {
    return (
        <div className = "acceuil">
            <Header />
            <BanniereAcc texte= {"Chez vous, partout et ailleurs"}/>
            <div className="liste-appartements">
            {Appartements.map((appartement) => <NavLink key={appartement.id} to={"/appartement/"+appartement.id+"/#"}><Vignette key={appartement.id} id={appartement.id} image={appartement.cover} titre={appartement.title} /></NavLink>)}
            </div>
            <Footer />
        </div>
    );
};

export default Home;