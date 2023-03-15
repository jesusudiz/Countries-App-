

import React from 'react';
import "./Country.css"
import { useDispatch} from 'react-redux';
import { addFavorites, deleteFavorites } from '../redux/actions'
import {NavLink} from 'react-router-dom';
import { getCountryById } from '../redux/actions';




export const Country = ({ pais }) => {

const dispatch = useDispatch();

const selectFavorites = (e) => {
    e.preventDefault();
   
    if (e.target.checked) {
      dispatch(addFavorites(e.target.value));
    } else {
      dispatch(deleteFavorites(e.target.value));
    }
  }

  const viewCountry=()=>{
    dispatch(getCountryById(pais.id))
  }
return (
<div className="country">
<div className="country-content-img">
<img className="country-img" src={pais.bandera} alt={pais.nombre} />
</div>
<div className="content-text">
<span>{pais.nombre}</span>
<span>{pais.continente}</span>
<div className="country-btn">
<NavLink to="/details"><button onClick={viewCountry}>Detalles</button></NavLink>
</div>
</div>
<div className="container-favoritos">
<label className="favoritos">
<input type="checkbox" value={pais.id} onChange={selectFavorites}/>
<div className="checkmark"></div>
</label>
</div>
</div>
)
}