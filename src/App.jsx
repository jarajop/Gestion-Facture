import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Facture from './pages/Facture';
import Authentification from './pages/Authentification';
import CardCircuit from './pages/CardCircuit';
 import Card from './pages/Card';
 import Filtre from './pages/Filtre';
import FactureBis from './pages/FactureBis';
import Start from './pages/Start';


function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<App />} />
          <Route path='/gestion_facture' element={<Facture />} />
          <Route path='/connexion' element={<Authentification />} />
          <Route path='/carte' element={<CardCircuit />} />
          <Route path='/carte_circuit' element={<Card />} />
          <Route path='/filtre' element={<Filtre />} />
          <Route path='/facture2' element={<FactureBis />} />
          <Route path='/start' element={<Start />} />




        </Routes>


      </BrowserRouter>

    </div>
  )
}

export default App
