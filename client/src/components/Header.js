import React, { useState } from 'react';
import "./Header.css"

import { useSelector, useDispatch } from "react-redux"
import { getByNameCountry } from "../redux/actions"
// import { NavLink } from 'react-router-dom';

export const Header = () => {
    const countrySearched = useSelector(state => state.countries);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const [nameNotFound, setNameNotFound] = useState(null)

    const searchInput = (e) => {
        const inputValueLower = e.target.value.toLowerCase();
        setSearchValue(inputValueLower);

        const result = countrySearched.filter((country) => {
            return Object.values(country).some((value) =>
              typeof value === "string" && value.toLowerCase().includes(searchValue)
            );
          });
          
          if (result.length > 0) {
            setNameNotFound(null);
          } else {
            setNameNotFound({ message: "Escriba el nombre correctamente" });
          }
          
          if (e.keyCode === 13) {
            if (result.length > 0) {
              dispatch(getByNameCountry(result));
            }
          }
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

                <input className="input" value={searchValue} onChange={(e) => searchInput(e)} onKeyDown={(e) => searchInput(e)} type="text" required="" placeholder="Buscar..." />
                {nameNotFound && <p>{nameNotFound.message}</p>}
            </div>
            <div className="header-container-btn">
            <div className="header-btn">
             {/* <NavLink to="/landing">  */}
             <span>Inicio</span>
             {/* </NavLink>  */}
            </div>

            <div className="header-btn">
            {/* <NavLink to='/create'> */}
               <span>Agregar Actividad</span>
            {/* </NavLink> */}
            </div>

            </div>
            
        </header>
    )
}
