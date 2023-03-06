import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import FicheLogements from './pages/ficheLogement/FicheLogements';
import Erreur404 from'./pages/erreur404/Erreur404';
import About from './pages/about/About';
import Home from './pages/home/Home';
import './App.scss';



const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appartement/:appartementId" element={<FicheLogements />} />
      <Route path="*" element={<Erreur404/>} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;