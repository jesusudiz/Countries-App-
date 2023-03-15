import React from 'react'

import './ActivitiesCard.css';

export const ActivitiesCard = ({ actividad }) => {
  return (
    <div className='activities-card'>
<div className='activities-text'>


      <div className='activities-id'>
        <div ><p>{actividad.id}</p></div>
      </div>

      <div className='activities-tittle'>
        <p>Actividad Turística </p>
        <h2>{actividad.nombre}</h2>
      </div>

      <div className="text-activity">
        <span>Nivel de dificultad:{actividad.dificultad}</span>
        <span>Horas de duracion:{actividad.duracion}</span>
      </div>
</div>

    </div>
  )
}
