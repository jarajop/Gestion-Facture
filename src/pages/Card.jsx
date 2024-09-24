import React from 'react'
import CardCircuit from "./CardCircuit"
import Filtre from './Filtre'
function Card() {
  return (
    <main >
      <div className="row">
        <div className='col-3'>  <Filtre /></div>
        <div className='col-3'>  <CardCircuit /></div>
        <div className='col-3'>  <CardCircuit /></div>
        <div className='col-3'>  <CardCircuit /></div>
      </div>

      <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mx-0 p-0 my-5">
        <CardCircuit />
        <CardCircuit />
        <CardCircuit />
        <CardCircuit />

      </div>
    </main>)
}

export default Card