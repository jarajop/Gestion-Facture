import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Facture from './components/Facture';
import Authentification from './components/Authentification';
// import { AuthProvider } from './context/AuthContext'; // Importer AuthProvider
import CardCircuit from './components/CardCircuit';
 import Card from './components/DashboardAdmin';
 import Filtre from './components/Filtre';
import FactureBis from './components/FactureBis';
import DashUser from './components/DashUser';
// import Banner from './components/Banner';


function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<App />} />
          <Route path='/gestion_facture' element={<Facture />} />
          <Route path='/login' element={<Authentification />} />
          <Route path='/carte' element={<CardCircuit />} />
          <Route path='/admin' element={<Card />} />
          <Route path='/filtre' element={<Filtre />} />
          <Route path='/facture2' element={<FactureBis />} />
          <Route path='/dashboard' element={<DashUser />} />




        </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App
