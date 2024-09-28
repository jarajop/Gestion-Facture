import React, { useEffect, useState } from 'react';
import "../assets/style/filtre2.css"; 
import { Modal, Button } from 'react-bootstrap'; 
import { useSmartphone } from '../context/Smartphonecontext';

function DashboardAdmin() {
  const [listSmartphones, setListSmartphones] = useState([]);
  const [smartphone, setSmartphone] = useState({
    id: null,
    nom: "",
    marque: "",
    description: "",
    prix: 0,
    photo: "",
    ram: "",
    rom: "",
    ecran: "",
    couleursDisponibles: ""
  });
  const [error, setError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSmartphone, setSelectedSmartphone] = useState(null); 
  const [showModal, setShowModal] = useState(false); 

  // Charger les smartphones depuis le localStorage
  useEffect(() => {
    console.log('Tentative de récupération des smartphones depuis localStorage');
    const savedSmartphones = JSON.parse(localStorage.getItem('items')) || [];
    if (savedSmartphones.length > 0) {
      console.log('Smartphones récupérés : ', savedSmartphones);
    } else {
      console.log('Aucun smartphone trouvé dans localStorage');
    }
    setListSmartphones(savedSmartphones);
  }, []);

  // Enregistrer les smartphones dans le localStorage à chaque modification
  useEffect(() => {
    if (listSmartphones.length > 0) {
      console.log('Enregistrement des smartphones dans localStorage : ', listSmartphones);
      localStorage.setItem('items', JSON.stringify(listSmartphones));
    }
  }, [listSmartphones]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormInvalid = smartphone.nom === "" || smartphone.prix <= 0 || smartphone.photo === "";
    if (isFormInvalid) {
      setError(true);
      return;
    }

    if (isEditing) {
      const updatedListSmartphones = listSmartphones.map(item => (item.id === smartphone.id ? smartphone : item));
      setListSmartphones(updatedListSmartphones);
      setIsEditing(false);
    } else {
      const newSmartphone = { ...smartphone, id: Date.now() };
      setListSmartphones([...listSmartphones, newSmartphone]);
      console.log('Nouveau smartphone ajouté : ', newSmartphone);
    }

    setSmartphone({
      id: null,
      nom: "",
      marque: "",
      description: "",
      prix: 0,
      photo: "",
      ram: "",
      rom: "",
      ecran: "",
      couleursDisponibles: ""
    });
    setError(false);
  };

  const handleEdit = (index) => {
    const editedSmartphone = listSmartphones[index];
    setSmartphone({ ...editedSmartphone });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedListSmartphones = listSmartphones.filter(item => item.id !== id);
    setListSmartphones(updatedListSmartphones);
    console.log(`Smartphone avec l'id ${id} supprimé`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSmartphone(prevState => ({ ...prevState, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShowDetails = (smartphone) => {
    setSelectedSmartphone(smartphone);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSmartphone(null);
  };

  return (
    <div className='row'>
      <div className='col-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
        <form onSubmit={handleSubmit} method='post'>
          <h2 className='text-warning pb-4'>Champs d'ajout de smartphone</h2>

          <div className="mb-3">
            <label className="form-label fs-4 text-danger-emphasis">Nom</label>
            <input type="text" className="form-control" value={smartphone.nom} onChange={(e) => setSmartphone({ ...smartphone, nom: e.target.value })} />
            {error && smartphone.nom === "" && <span className="text-danger">Le nom est requis.</span>}
          </div>

          <div className="mb-3">
            <label className="form-label fs-4 text-danger-emphasis">Marque</label>
            <input type="text" className="form-control" value={smartphone.marque} onChange={(e) => setSmartphone({ ...smartphone, marque: e.target.value })} />
          </div>

          <div className="mb-3">
            <label className="form-label fs-4 text-danger-emphasis">Description</label>
            <textarea className="form-control" value={smartphone.description} onChange={(e) => setSmartphone({ ...smartphone, description: e.target.value })}></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label fs-4 text-danger-emphasis">Prix</label>
            <input type="number" className="form-control" value={smartphone.prix} onChange={(e) => setSmartphone({ ...smartphone, prix: e.target.value })} />
            {error && smartphone.prix <= 0 && <span className="text-danger">Le prix doit être supérieur à 0.</span>}
          </div>

          <div className="mb-3">
            <label className="form-label fs-4 text-danger-emphasis">Photo</label>
            <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
            {error && smartphone.photo === "" && <span className="text-danger">Veuillez ajouter une photo.</span>}
          </div>

          <div className="mb-3">
            <label className="form-label fs-4 text-danger-emphasis">Taille RAM</label>
            <input type="text" className="form-control" value={smartphone.ram} onChange={(e) => setSmartphone({ ...smartphone, ram: e.target.value })} />
          </div>

          <div className="mb-3">
            <label className="form-label fs-4 text-danger-emphasis">Taille ROM</label>
            <input type="text" className="form-control" value={smartphone.rom} onChange={(e) => setSmartphone({ ...smartphone, rom: e.target.value })} />
          </div>

          <div className="mb-3">
            <label className="form-label fs-4 text-danger-emphasis">Taille Écran</label>
            <input type="text" className="form-control" value={smartphone.ecran} onChange={(e) => setSmartphone({ ...smartphone, ecran: e.target.value })} />
          </div>

          <div className="mb-3">
            <label className="form-label fs-4 text-danger-emphasis">Couleurs Disponibles</label>
            <input type="text" className="form-control" value={smartphone.couleursDisponibles} onChange={(e) => setSmartphone({ ...smartphone, couleursDisponibles: e.target.value })} />
          </div>

          <button type="submit" className="btn btn-success">{isEditing ? "Modifier" : "Ajouter"} smartphone</button>
        </form>
      </div>

      <div className='col-6 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <h2 className='text-primary pb-4'>Liste des smartphones</h2>

        <div className="row row-cols-1 row-cols-lg-2 g-4 mx-0 p-0 my-5">
          {listSmartphones.map((smartphone, index) => (
            <div className="col" key={smartphone.id}>
              <div className="content_card col-lg-12 shadow-sm p-0 mb-0">
                <div className="d-flex justify-content-center">
                  <img src={smartphone.photo} alt={smartphone.nom} className="img_card_content" style={{ maxHeight: "200px", objectFit: "cover" }} />
                </div>
                <div className="content_details p-3">
                  <div className="content_text_vehicule">
                    <h5 className="text_vehicule fw-bold pb-2">{smartphone.nom}</h5>
                    <p className="card-text">
                      <strong>Prix: </strong> {smartphone.prix} €
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-warning" onClick={() => handleEdit(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(smartphone.id)}>Supprimer</button>
                    <button className="btn btn-secondary" onClick={() => handleShowDetails(smartphone)}>⋮</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Détails du smartphone</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f5f5f5", color: "#333" }}>
          {selectedSmartphone && (
            <>
              <p><strong>Nom :</strong> {selectedSmartphone.nom}</p>
              <p><strong>Marque :</strong> {selectedSmartphone.marque}</p>
              <p><strong>Description :</strong> {selectedSmartphone.description}</p>
              <p><strong>Prix :</strong> {selectedSmartphone.prix} €</p>
              <p><strong>RAM :</strong> {selectedSmartphone.ram}</p>
              <p><strong>ROM :</strong> {selectedSmartphone.rom}</p>
              <p><strong>Écran :</strong> {selectedSmartphone.ecran}</p>
              <p><strong>Couleurs disponibles :</strong> {selectedSmartphone.couleursDisponibles}</p>
              <img src={selectedSmartphone.photo} alt={selectedSmartphone.nom} style={{ maxHeight: "200px", objectFit: "cover", marginTop: "10px" }} />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DashboardAdmin;
