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
                <div className='gallery-item1'></div>
                <div className='gallery-item2'></div>
                <div className='gallery-item3'></div>
                <div className='gallery-item4'></div>
                <div className='gallery-item5'></div>
                <div className='gallery-item6'></div>
            </div>
            <div className='zone-form'>
                <div className='zone-form1'>
                    <div className='btn-regresar'>
                        <span><NavLink to="/Home">Volver</NavLink></span>
                    </div>
                </div>
                <div className='zone-form2'>
                    <div>
                        <Formulario />
                    </div>
                </div>
            </div>


        </div>
        // </>
    )
}