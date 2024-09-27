import React from "react";
import "../assets/style/filtre2.css";
import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

function CardCircuit({ imgsrc, description, duration, reviews, onEdit, onDelete }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div id="card_vehicule" className="">
      <div className="row m-0 p-0">
        <div className="content_card col-lg-3 shadow-sm p-0 mb-0">
          <div className="d-flex justify-content-center">
            <img src={imgsrc} alt="Circuit" className="img_card_content" />
          </div>
          <div className="content_details">
            <div className="content_text_vehicule">
              <p className="text_vehicule fw-bold text-break pb-2">{description}</p>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div className="d-flex justify-content-start">
                <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />
                <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />
                <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />
                <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />
                <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />
              </div>
              <div>
                <span className="content_avis fw-bold">{reviews} avis</span>
              </div>
            </div>

            {/* Affichage conditionnel des boutons "Modifier" et "Supprimer" */}
            {onEdit && onDelete && (
              <div className="d-flex justify-content-between p-3">
                <button className="text_button border-0" onClick={handleEdit}>
                  <span>MODIFIER</span>
                </button>
                <button className="text_button border-0 " onClick={handleDelete}>
                  <span>SUPPRIMER</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCircuit;
