import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Landing.css"

export const Landing = () => {;
  return (
    <div className="Landing">
      <div className="Landing-btn">
      <NavLink to="/home"><buttom>Home</buttom></NavLink>

      </div>
     
    </div>
  )
}


