import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


// import { useSelector, useDispatch } from 'react-redux';
// // import { NavLink } from 'react-router-dom';
// import { getByContinent } from '../redux/actions';
// import { ordenar } from '../utils/index';
// import { LogoButton } from './LogoButton.js';

import './NavBar.css';

export const NavBar = () => {

  // const [expanded, setExpanded] = useState(false);

  // const handleMouseEnter = () => {
  //   setExpanded(true);
  // };

  // const handleMouseLeave = () => {
  //   setExpanded(false);
  // };
 
  return (
    <div className="navbar-container">
      <div className="dropdown clicked">
        <span>Continentes <FontAwesomeIcon icon={ faChevronDown } /></span>
        <div className="dropdown-content">
           <ul>
            <li>America</li>
            <li>Europa</li>
            <li>Africa</li>
            <li>Oceania</li>
            <li>Antartida</li>
            <li>Asia</li>
           </ul>
        </div>
      </div>
      <div className="dropdown clicked">
        <span>Filtrar  <FontAwesomeIcon icon={ faChevronDown } /></span>
        <div className="dropdown-content">
           <ul>
            <li>Mayor Poblacion</li>
            <li>Menor Población</li>
            <li>Orden Alfabetico ASC</li>
            <li>Orden Alfabetico DESC</li>
           </ul>
        </div>
      </div>
     
      <div className="dropdown clicked">
        <span>Actividades Turísticas  <FontAwesomeIcon icon={ faChevronDown } /></span>
        <div className="dropdown-content">
           <ul>
            <li>evento</li>
            <li>evento</li>
            <li>evento</li>
            <li>evento</li>
           </ul>
        </div>
    </div>
    <div className="dropdown clicked">
        <span>Favoritos</span>
        </div>
    </div>
  );
};

