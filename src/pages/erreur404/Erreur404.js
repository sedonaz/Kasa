import React from "react";
import { Link } from "react-router-dom";
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import './Erreur404.scss';
function Erreur404() {
  return (
    <div>
    <Header />
    <div className="erreur">
      <div className="erreur__content">
        <p className="erreur__nombre">404</p>
        <p className="erreur__texte">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="erreur__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
    <Footer />
  </div>
  );
}

export default Erreur404;