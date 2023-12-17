import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Facture from './pages/Facture';
import Authentification from './pages/Authentification';
import Filtre from './pages/Filtre';
import Card from './pages/Card';


function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<App />} />
          <Route path='/gestion_facture' element={<Facture />} />
          <Route path='/connexion' element={<Authentification />} />
          <Route path='/filtre' element={<Filtre />} />
          <Route path='/carte' element={<Card />} />

        </Routes>


      </BrowserRouter>

    </div>
  )
}

export default App
