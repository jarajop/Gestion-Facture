import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import "../assets/style/connexion.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Authentification() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Informations d'identification correctes
    const correctEmail = "Esmt2024@gmail.com";
    const correctPassword = "passer123";

    // Vérification des informations d'identification
    if (email === correctEmail && password === correctPassword) {
      // Rediriger vers la page Card.jsx
      navigate('/admin');
    } else {
      // Affiche une erreur si les informations ne correspondent pas
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Connectez-vous à votre compte</p>
          </div>

          <div className="divider d-flex align-items-center my-4">
          </div>
          {/* Affichage du message d'erreur si nécessaire */}
          {error && <p className="text-danger">{error}</p>}
          <MDBInput
            wrapperClass='mb-4'
            label='Email '
            id='formControlLg'
            type='email'
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'email
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Mot de passe'
            id='formControlLg'
            type='password'
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Mise à jour du mot de passe
          />

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Se souvenir de moi' />
            <a href="!#">Mot de passe oublié?  </a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleSubmit}>Se connecter</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>



    </MDBContainer>
  );
}

export default Authentification; 