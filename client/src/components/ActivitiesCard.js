import React from 'react'

import  './ActivitiesCard.css';

export const ActivitiesCard = ({actividad}) => {
  return (
    <div className='activities-card'>
      <div className='activities-id'>{actividad.id}</div>
      <div className='activities-tittle'> <h3>{actividad.nombre}</h3></div>
      <div className='activities-text'>
        <span>{actividad.dificultad}</span>
        <span>{actividad.duracion}</span>


      </div>

    </div>
  )
}
