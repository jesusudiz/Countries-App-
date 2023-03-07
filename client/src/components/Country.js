import React from 'react'
import "./Country.css"

export const Country = ({pais}) => {
  return (
    <div className="country">
    <div className="country-content_img">
      <img className="country-img" src="https://media.istockphoto.com/id/856084116/es/foto/bandera-de-venezuela-parte-de-la-serie.jpg?s=612x612&w=0&k=20&c=ijTyN7sFy27ojLGbTuIuRdaN-CyymX3WkE1N6FM9BcI=" alt="" />
    </div>
     <div className="content-text">
      <span>Nombre pais</span>
      <span>Continente</span>
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
