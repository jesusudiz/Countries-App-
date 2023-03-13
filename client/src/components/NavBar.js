import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as action from '../redux/actions'
import { useDispatch,useSelector } from "react-redux";
// // import { NavLink } from 'react-router-dom';

import './NavBar.css';

export const NavBar = () => {
  const dispatch = useDispatch();
  const activities = useSelector(state=>state.NameActivities)

  const eventsApp = (event) => {

    switch (event.target.innerText) {
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
        dispatch(action.getByContinent(event.target.innerText))
        break;
      case 'Africa':
        dispatch(action.getByContinent(event.target.innerText))
        break;
      case 'Oceania':
        dispatch(action.getByContinent(event.target.innerText))
        break;
      case 'Antarctica':
        dispatch(action.getByContinent(event.target.innerText))
        break;
      case 'Asia':
        dispatch(action.getByContinent(event.target.innerText))
        break;
      case 'North America':
        dispatch(action.getByContinent(event.target.innerText))
        break;
      case 'South America':
        dispatch(action.getByContinent(event.target.innerText))
        break;
      case 'Favoritos':
        dispatch(action.allFavorites());
        break;
      case 'Todos los Paises':
        dispatch(action.getAllCountry());
        break;
      default:
        return 'no se realizo un evento'

    }


  }
  return (
    <div className="navbar-container">
      <div className="dropdown clicked">
        <span>Continentes <FontAwesomeIcon icon={faChevronDown} /></span>
        <div className="dropdown-content">
          <ul>
            <li onClick={(event) => eventsApp(event)}>Europe</li>
            <li onClick={(event) => eventsApp(event)}>Africa</li>
            <li onClick={(event) => eventsApp(event)}>Oceania</li>
            <li onClick={(event) => eventsApp(event)}>Antarctica</li>
            <li onClick={(event) => eventsApp(event)}>Asia</li>
            <li onClick={(event) => eventsApp(event)}>North America</li>
            <li onClick={(event) => eventsApp(event)}>South America</li>

          </ul>
        </div>
      </div>
      <div className="dropdown clicked">
        <span>Filtrar  <FontAwesomeIcon icon={faChevronDown} /></span>
        <div className="dropdown-content">
          <ul>
            <li onClick={(event) => eventsApp(event)}>Mayor Poblacion</li>
            <li onClick={(event) => eventsApp(event)}>Menor Población</li>
            <li onClick={(event) => eventsApp(event)}>Orden Alfabetico ASC</li>
            <li onClick={(event) => eventsApp(event)}>Orden Alfabetico DESC</li>
          </ul>
        </div>
      </div>

    { activities.length > 0 &&  <div className="dropdown clicked">
        <span>Actividades Turísticas  <FontAwesomeIcon icon={faChevronDown} /></span>
        <div className="dropdown-content">
          <ul>
            {activities.map((activity,index)=><li key={`${index}${activity}`} onClick={(event) => eventsApp(event)}>{activity}</li>)}
          </ul>
        </div>
      </div> }
      <div className="dropdown clicked">
        <span onClick={(event) => eventsApp(event)}>Favoritos</span>
      </div>
      <div className="dropdown clicked">
        <span onClick={(event) => eventsApp(event)}>Todos los Paises</span>
      </div>
    </div>
  );
};

