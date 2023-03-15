import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as action from '../redux/actions'
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Header } from "../components/Header";


import './NavBar.css';

export const NavBar = () => {
  const dispatch = useDispatch();
  // const activities = useSelector(state => state.NameActivities)

  const eventsApp = (e) => {

    switch (e.target.innerText) {
      case 'Orden Alfabetico ASC':
        dispatch(action.orderAsc())
        break;
      case 'Orden Alfabetico DESC':
        dispatch(action.orderDesc())
        break;
      case 'Menor Población':
        dispatch(action.higherPopulation())
        break;
      case 'Mayor Poblacion':
        dispatch(action.lowerPopulation())
        break;
      case 'Europe':
        dispatch(action.getByContinent(e.target.innerText))
        break;
      case 'Africa':
        dispatch(action.getByContinent(e.target.innerText))
        break;
      case 'Oceania':
        dispatch(action.getByContinent(e.target.innerText))
        break;
      case 'Antarctica':
        dispatch(action.getByContinent(e.target.innerText))
        break;
      case 'Asia':
        dispatch(action.getByContinent(e.target.innerText))
        break;
      case 'North America':
        dispatch(action.getByContinent(e.target.innerText))
        break;
      case 'South America':
        dispatch(action.getByContinent(e.target.innerText))
        break;
      case 'Todos los Paises':
        dispatch(action.getAllCountry());
        break;
      default:
        dispatch(action.getAllCountry());

    }


  }
  return (

    <>
      <Header />
      <div className="navbar-container">

        <div className="dropdown clicked">
          <span>Continentes <FontAwesomeIcon icon={faChevronDown} /></span>
          <div className="dropdown-content">
            <ul>
              <li onClick={(e) => eventsApp(e)}>Europe</li>
              <li onClick={(e) => eventsApp(e)}>Africa</li>
              <li onClick={(e) => eventsApp(e)}>Oceania</li>
              <li onClick={(e) => eventsApp(e)}>Antarctica</li>
              <li onClick={(e) => eventsApp(e)}>Asia</li>
              <li onClick={(e) => eventsApp(e)}>North America</li>
              <li onClick={(e) => eventsApp(e)}>South America</li>

            </ul>
          </div>
        </div>
        <div className="dropdown clicked">
          <span>Filtrar  <FontAwesomeIcon icon={faChevronDown} /></span>
          <div className="dropdown-content">
            <ul>
              <li onClick={(e) => eventsApp(e)}>Mayor Poblacion</li>
              <li onClick={(e) => eventsApp(e)}>Menor Población</li>
              <li onClick={(e) => eventsApp(e)}>Orden Alfabetico ASC</li>
              <li onClick={(e) => eventsApp(e)}>Orden Alfabetico DESC</li>
            </ul>
          </div>
        </div>

        <div className="dropdown clicked">

          <NavLink to="/activity"> <span>Actividades Turísticas </span> </NavLink>

        </div>

        <div className="dropdown ">

          <NavLink to="/favorites"> <span>Favoritos</span>  </NavLink>

        </div>

        <div className="dropdown ">
        <NavLink to="/home"> <span onClick={(e) => eventsApp(e)}>Todos los Paises</span> </NavLink> 
        </div>
      </div>
    </>

  );
};

