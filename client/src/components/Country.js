import React from 'react'
import "./Country.css"

export const Country = ({pais}) => {
  return (
    <div className="country">
    <div className="country-content_img">
      <img className="country-img" src={pais.bandera}alt={pais.nombre} />
    </div>
     <div className="content-text">
      <span>{pais.nombre}</span>
      <span>{pais.continente}</span>
      <div className="country-btn">
       <button>Detalles</button>
     </div>
     </div>
       <div className="container-favoritos">
       <label className="favoritos">
       <input type="checkbox"/>
       <div className="checkmark"></div>
       </label>
       </div>
  </div>
  )
}
