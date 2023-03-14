import React from 'react'
import { NavLink } from 'react-router-dom';
import { Formulario } from '../components/Formulario';
import './SaveActivity.css'
// import { NavBar } from "../components/NavBar";
// import { Header } from "../components/Header";

export const SaveActivity = () => {
    ;
    return (

        <div className='page-formulario'>
            <div className='gallery-img'>
             <div className='gallery-item'></div>
             <div className='gallery-item'></div>
             <div className='gallery-item'></div>
             <div className='gallery-item'></div>
             <div className='gallery-item'></div>
             <div className='gallery-item'></div>
            </div>
            <div className='zone-form'>
                <div className='zone-form1'>
                <div className='btn-regresar'> 
                   <span><NavLink to="/Home">Volver</NavLink></span> 
                </div>
                </div>
                <div className='zone-form2'>

                <Formulario />
                </div>
                </div>


        </div>
        // </>
    )
}