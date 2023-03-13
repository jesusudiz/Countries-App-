

import React, { useState } from 'react';
import "./Country.css"
import { useDispatch} from 'react-redux';
import { addFavorites, deleteFavorites } from '../redux/actions'

export const Country = ({ pais }) => {
const [favorite, setFavorite] = useState(false);
const dispatch = useDispatch();

const selectFavorites = (country) => {
setFavorite(!favorite)
if (favorite) {
dispatch(addFavorites(country.id));
} else {
dispatch(deleteFavorites(country.id));
}
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
<button>Detalles</button>
</div>
</div>
<div className="container-favoritos">
<label className="favoritos">
<input type="checkbox" onChange={() => selectFavorites(pais)}/>
<div className="checkmark"></div>
</label>
</div>
</div>
)
}