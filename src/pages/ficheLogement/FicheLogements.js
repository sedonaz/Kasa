import { useParams } from "react-router-dom";
import appartements from "../../assets/api/appartements.json";
import EtoileVide from'../../assets/images/EtoileVide.png';
import Carrousel from "../../components/carrousel/Carrousel";
import Tags from "../../components/tags/Tags";
import Dropdown from "../../components/Dropdown/Dropdown";
import EtoilePleine from'../../assets/images/EtoilePleine.png';
import Header from'../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import './FicheLogements.scss';
function Appartement() {
  const { appartementId } = useParams();
  const logement = appartements.find((logement) => logement.id === appartementId);
  const tagsLogement = logement?.tags.map((tags, index) => {
  return <Tags key={index} getTag={tags} />
  });
  let note = [];
    let etoileRemplie = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(logement?.rating)) {
            etoileRemplie = false;
        }
        if(etoileRemplie === true) {
            note.push(<img key={index} className="etoile" src={EtoilePleine} alt={`${logement?.rating}/5`}/>)
        } else {
            note.push(<img key={index} className="etoile" src={EtoileVide} alt={`${logement?.rating}/5`}/>)
        }
    }
    const equipements = logement?.equipments.map((equipment, index) => {
      return <li key={index}>{equipment}</li>
  })
  return (
    <div className="singleproduct">
      <Header />
      <Carrousel images={logement?.pictures}/>
      <div className="logement__content">
        <div className="logement__informations">
          <h1 className="titre-logement">{logement?.title}</h1>
          <p className="endroit-logement">{logement?.location}</p>
          <div className="tags">
            {tagsLogement}
          </div>
        </div>
        <div className="proprietaire__infosNote">
          <div className="proprietaire__infos">
            <span className="proprietaire__nom">{logement?.host.name}</span>
            <img className="proprietaire__photo" src={logement?.host.picture} alt="Propriétaire"/>
          </div>
            <div className="note">
              {note}
            </div>
        </div>
      </div>
      <div className="logements__dropdowns">
        <Dropdown titre="Description" description={logement?.description}/>
        <Dropdown titre="Équipements" description={equipements}/>
      </div>
      <Footer />
    </div>
  );
}

export default Appartement;