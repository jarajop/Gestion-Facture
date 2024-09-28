import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentification from './components/Authentification';
import DashUser from './components/DashUser';
import { SmartphoneProvider } from './context/Smartphonecontext';
import DashboardAdmin from './components/DashboardAmin';

function App() {

  return (
    <div>
      <SmartphoneProvider> 
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<App />} />
          {/* <Route path='/gestion_facture' element={<Facture />} /> */}
          <Route path='/login' element={<Authentification />} />
          <Route path='/admin' element={<DashboardAdmin/>} />
          <Route path='/dashboard' element={<DashUser />} />




        </Routes>


      </BrowserRouter>
      </SmartphoneProvider>
    </div>
  )
}

export default App
