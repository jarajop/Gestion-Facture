// src/components/DashUser.jsx

import React from 'react';
import { useSmartphone } from  "../context/SmartphoneContext"; 
import { useNavigate } from 'react-router-dom'; 
import "../assets/style/connexion.css"
import { useState, useEffect } from 'react';



function DashUser() {
  const { listSmartphones } = useSmartphone();
  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection
  const [welcomeMessage, setWelcomeMessage] = useState("Bienvenue dans l'application de gestion des smartphones!");


  const handleConnexionClick = () => {
    navigate('/login'); // Redirige vers la page de connexion
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setShowWelcome(prev => !prev); // Alterner l'affichage
    }, 2000); // 2000 ms = 2 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle lors de la désactivation du composant
  }, []);
  return (

    
    <div>

      {/* Bouton "Connexion" en haut à droite */}
      <div className="top-right-button">
        <button className="connexion-button" onClick={handleConnexionClick}>
          Connexion
        </button>
      </div>

       {/* Message de Bienvenue avec animation */}
       <div className="welcome-message text-center my-4">
        <p className="typing-animation">{welcomeMessage}</p>
      </div>


      <div className='row'>
      <h2 className='text-primary pb-4'>Liste des smartphones disponibles</h2>

      <div className="row row-cols-1 row-cols-lg-2 g-4 mx-0 p-0 my-5">
        {listSmartphones.map((smartphone) => (
          <div className="col" key={smartphone.id}>
            <div className="content_card col-lg-12 shadow-sm p-0 mb-0">
              <div className="d-flex justify-content-center">
                <img src={smartphone.photo} alt={smartphone.nom} className="img_card_content" style={{ maxHeight: "200px", objectFit: "cover" }} />
              </div>
              <div className="content_details p-3">
                <div className="content_text_vehicule">
                  <h5 className="text_vehicule fw-bold ">{smartphone.nom}</h5>
                  <p className="card-text">
                    <strong>Prix: </strong> {smartphone.prix} €
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default DashUser;
