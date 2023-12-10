import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Facture from './pages/Facture';



function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<App />} />
          <Route path='/gestion_facture' element={<Facture />} />
        </Routes>


      </BrowserRouter>

    </div>
  )
}

export default App
