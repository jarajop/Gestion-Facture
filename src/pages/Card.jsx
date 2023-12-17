import React from 'react'
import Filtre from "./Filtre"
function Card() {
  return (
    <main>
    
    <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mx-0 p-0 my-5">
      <Filtre />
      <Filtre />
      <Filtre />
    </div>

    <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mx-0 p-0 my-5">
      <Filtre />
      <Filtre />
      <Filtre />
    </div>
  </main>  )
}

export default Card