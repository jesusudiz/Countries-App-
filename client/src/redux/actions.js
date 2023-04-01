/* eslint-disable no-template-curly-in-string */
import axios from 'axios';
import { GET_ALL_COUNTRY, GET_ALL_ACTIVITIES, GET_COUNTRY_BY_ID, GET_BY_NAME_COUNTRY, ADD_ACTIVITIES, DELETE_COUNTRY, ADD_FAVORITES, DELETE_FAVORITES, ALL_FAVORITES, ORDER_ASC, ORDER_DESC, GET_BY_CONTINENT, GET_BY_TYPE_ACTIVITY, SET_PAGE, GET_LIST_CONTINENTS,LOWER_POPULATION,HIGHER_POPULATION,DELETE_ACTIVITIES,GET_LIST_COUNTRIES,GET_LIST_ACTIVITIES } from "./types";

//* 1. action-creator para llamar a todos los countries del back-end;
export const getAllCountry = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/countries');
    dispatch({
      type: GET_ALL_COUNTRY,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};

//* 2. action-creator para llamar a un country por id.

export const getCountryById = (id) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3001/countries/${id}`);

    dispatch({
      type: GET_COUNTRY_BY_ID,
      payload: res.data
    })
  } catch (err) {
    console.error(err);
  };
};

//* 3. action-creator para llamar a un country por name.

export const getByNameCountry =  (name) => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/countries');
    const data = res.data.filter(country=>country.nombre.toLowerCase() === name.toLowerCase())
    dispatch({
      type: GET_BY_NAME_COUNTRY,
      payload: data
    });
  } catch (err) {
    console.error(err);
  }
};

//* 4. action-creator para llamar a todas las actividades turisticas.

export const getAllActivities = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/activities');
    dispatch({
      type: GET_ALL_ACTIVITIES,
      payload: res.data
    })
  } catch (err) {
    console.error(err);
  }
}
export const getListActivities = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/activities');
    const names = res.data.map(name => name.nombre)
    dispatch({
      type: GET_LIST_ACTIVITIES,
      payload: names
    })
  } catch (err) {
    console.error(err);
  }
}

//* 5. action-creator para agregar nuevas actividades turisticas.(agregar en la DB los datos del formulario)



export const addActivities = (activityData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/activities", activityData);
      console.log(response.data)
      alert(response.data)
      dispatch({ type: ADD_ACTIVITIES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//* 6: action-creator para borrar un country.



export const deleteCountry = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:3001/countries/${id}`).data;
      dispatch({ type: DELETE_COUNTRY, payload: res });
    } catch (error) {
      console.log(error);
    }
  };
};

//* 7: action-creator para agregar ha favoritos.

export const addFavorites = (id) => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/countries');
    const countryAdded= res.data.filter(pais=>pais.id===id)
    dispatch({
      type: ADD_FAVORITES,
      payload: countryAdded
    });
  } catch (err) {
    console.error(err);
  }
};

//* 8: action-creator para agregar ha favoritos.

export const deleteFavorites = (selected) => {
  return {
    type: DELETE_FAVORITES,
    payload: selected.id
  }
}

//* 9: action-creator para agregar ha favoritos.

export const deleteActivities = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:3001/activities/${id}`).data;
      dispatch({ type: DELETE_ACTIVITIES, payload: res });
    } catch (error) {
      console.log(error);
    }
  };

}

//* 10: action-creator para 

export const allFavorites = () => {
 return {
  type:ALL_FAVORITES,

 }
};

//* 11: action-creator para ordenar alfabeticamente "ascendente";

export const orderAsc = () => {
  return {
    type: ORDER_ASC,
   
  };
};
export const higherPopulation =() => {
  return {
    type: HIGHER_POPULATION,
 
  };
}; 


//* 12: action-creator para ordenar alfabeticamente "descendente";
export const orderDesc = () => {
  return {
    type: ORDER_DESC,
 
  };
};
export const lowerPopulation =() => {
  return {
    type: LOWER_POPULATION,
 
  };
}; 
//* 13: action- creator para obtener datos  por continente:

export const getByContinent =  (name) => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/countries');
    const data = res.data.filter(country=>country.continente === name)
    dispatch({
      type: GET_BY_CONTINENT,
      payload: data
    });
  } catch (err) {
    console.error(err);
  }
};

//*14: action-creator para obtener datos por actividades turisticas
export const getByTypeActivity = (TypeActivity) => {
  return {
    type: GET_BY_TYPE_ACTIVITY,
    payload: TypeActivity
  }
}

//*15: action-creator para el paginado


export const setPage = (actionType, pageSize = 20, list, currentPage, property) => {
  let page;
  if (actionType === 'prev') {
    page = currentPage - 1;
  } else if (actionType === 'next') {
    page = currentPage + 1;
  } else {
    page = actionType;
  }
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pagedData = list.slice(start, end);
  return {
    type: SET_PAGE,
    payload: {
      page,
      pageSize,
      pagedData,
      property, // Nueva variable que indica la propiedad del estado que se está paginando
    },
  };
};

//*17: lista de continentes

export const getListContinents = () => {
  return async (dispatch) => {
    try {
      const continentes = await axios.get('http://localhost:3001/countries');

      const list = [...new Set(continentes.data.map(country => country.continente))];

      return {
        type: GET_LIST_CONTINENTS,
        payload: list,
      }

    } catch (error) {
      console.error(error)
    }
  }
}

export const getListCountries =() => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/countries');
    const listCountries = res.data.map(country => country.nombre)
    dispatch({
      type: GET_LIST_COUNTRIES,
      payload: listCountries
    });
  } catch (err) {
    console.error(err);
  }
};