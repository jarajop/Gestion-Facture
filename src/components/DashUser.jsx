import React, { useState } from 'react';
import CardCircuit from "./CardCircuit";
import iphone16 from "../assets/img/iphone_16.png";
import iphone15 from "../assets/img/iphone_15.png";
import iphone13 from "../assets/img/iphone_13.png";
import motorola from "../assets/img/motorola.png";
import samsungS23 from "../assets/img/samsung_galaxie_S3.png";
import xiaomi12 from "../assets/img/xiaomi_redmi_12.png";
import xiaomiA3 from "../assets/img/xiaomi_redmi_A3.png";
import tecno_phantom from "../assets/img/tecno_phantom.webp";
import "../assets/style/connexion.css"
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection



function DashUser() {

  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection


  const handleConnexionClick = () => {
    navigate('/login'); // Redirige vers la page de connexion
  };
  const [listCircuit, setListCircuit] = useState([
    { id: 1, imageSrc: iphone13, description: "Monument historique", duration: "2h", reviews: 3 },
    { id: 2, imageSrc: iphone15, description: "Explorez l'iPhone 15", duration: "3h", reviews: 5 },
    { id: 3, imageSrc: iphone16, description: "Découvrez l'iPhone 16", duration: "4h", reviews: 4 },
    { id: 4, imageSrc: xiaomiA3, description: "Circuit Xiaomi A3", duration: "5h", reviews: 7 },
    { id: 5, imageSrc: xiaomi12, description: "Circuit Xiaomi 12", duration: "6h", reviews: 6 },
    { id: 6, imageSrc: tecno_phantom, description: "Découvrez Tecno Phantom", duration: "7h", reviews: 8 },
    { id: 7, imageSrc: samsungS23, description: "Circuit Samsung S23", duration: "3h", reviews: 4 },
    { id: 8, imageSrc: motorola, description: "Circuit Motorola", duration: "4h", reviews: 6 }
  ]);

  return (
    <div>

      {/* Bouton "Connexion" en haut à droite */}
      <div className="top-right-button">
        <button className="connexion-button" onClick={handleConnexionClick}>
          Connexion
        </button>
      </div>

      {/* Affichage des circuits */}
      <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mx-0 p-0 my-5">
        {listCircuit.map(circuit => (
          <CardCircuit
            key={circuit.id}
            imgsrc={circuit.imageSrc}
            description={circuit.description}
            duration={circuit.duration}
            reviews={circuit.reviews}
          />
        ))}
      </div>
    </div>
  );
}

export default DashUser;
