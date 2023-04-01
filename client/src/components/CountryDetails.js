import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCountryById } from '../redux/actions';
import { Loader } from './Loader'


export const CountryDetails = ({ id }) => {
    const [isLoading, setIsLoading] = useState(true);
    const detalle = useSelector(state => state.details)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryById(id));
        setIsLoading(false);
    }, [dispatch, id]);


    return (
        <>
            {isLoading ? (<Loader />) : (
                <div className='detalles'>
                    <div className='container-detalles'>

                        <div className='container-bandera'>
                            <div className='detalle-bandera'>
                                <img src={detalle.bandera} alt="Bandera del pais" />
                            </div>
                        </div>


                        <div className='detalle-text'>
                            <h2>{detalle.nombre}</h2>
                            <div className='detalle-id'>
                                <small>{detalle.id}</small>
                            </div>
                            <p>¡Descubre todo lo que tiene para ofrecer! Este increíble país del continente <span>{detalle.continente}</span> es el hogar de una hermosa capital <span>{detalle.capital ? detalle.capital : null}</span> y una subregión única como lo es <span>{detalle.subregion}</span> . Con una impresionante área de <span>{detalle.area}</span> km<sup>2</sup>y una población diversa de <span>{detalle.continente}</span> personas, hay algo para todos en <span>{detalle.nombre}</span>. Disfruta de la cultura local, explora la naturaleza y saborea la deliciosa comida típica. ¡No te pierdas la oportunidad de visitar este increíble destino turístico y experimentar todo lo que <span>{detalle.nombre}</span> tiene para ofrecer!</p>
                        </div>
                    </div>
                </div>
            )};
        </>
    )
}



