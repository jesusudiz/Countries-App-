import React, { useState } from 'react';
import "./Header.css"

import {  useDispatch } from "react-redux"
import { getByNameCountry } from "../redux/actions"
import { NavLink } from 'react-router-dom';

export const Header = () => {
 
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  

const handleSubmit=(e)=>{
e.preventDefault();
dispatch(getByNameCountry(searchValue));
}



  return (
    <header className="header-content">
      <div className="header-logo">
        <div>
          <button data-text="Awesome" className="button">
            <span className="actual-text">&nbsp;Countries&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;Countries&nbsp;</span>
          </button>
        </div>
      </div>
      <div className="input-form">
       <form onSubmit={handleSubmit}>
        <input className="input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" required="" placeholder="Buscar..." />
     
       </form>
      </div>
      
      <div className="header-container-btn">
        <div className="header-btn">
          <NavLink to="/">
            <span>Inicio</span>
          </NavLink>
        </div>

        <div className="header-btn">
          <NavLink to='/create'>
            <span>Agregar Actividad</span>
          </NavLink>
        </div>

      </div>

    </header>
  )
}
