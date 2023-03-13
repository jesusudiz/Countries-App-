import React, { useState } from 'react';
import "./Header.css"
import logo from "../img/Countries.png"
import { useSelector, useDispatch } from "react-redux"
import { getByNameCountry } from "../redux/actions"

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
                <img src={logo} alt="logo countries" />
            </div>
            <div className="input-form">

                <input className="input" value={searchValue} onChange={(e) => searchInput(e)} onKeyDown={(e) => searchInput(e)} type="text" required="" placeholder="Buscar..." />
                {nameNotFound && <p>{nameNotFound.message}</p>}
            </div>
            <div className="header-container-btn">
            <div className="header-btn">
                <span>Home</span>
            </div>

            <div className="header-btn">
                <span>Agregar Actividad</span>
            </div>

            </div>
            
        </header>
    )
}
