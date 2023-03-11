import { GET_ALL_COUNTRY ,GET_COUNTRY_BY_ID,GET_BY_NAME_COUNTRY,GET_ALL_ACTIVITIES,ADD_ACTIVITIES,DELETE_COUNTRY,ADD_FAVORITES,DELETE_FAVORITES,DELETE_ACTIVITIES,ORDER_ASC,ORDER_DESC,GET_BY_CONTINENT,GET_BY_TYPE_ACTIVITY,ALL_FAVORITES,SET_PAGE,GET_LIST_CONTINENTS } from './types';

const initialState = {
  countries: [],
  activities: [],
  favorites:[],
  countriesId:[],
  countriesName:[],
  listOrdered:[],
  continents:[],
};

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRY:
      return {
        ...state,
        countries: action.payload
      };
    case GET_COUNTRY_BY_ID:
      return{
        ...state,
        countriesId: action.payload
      }
    case GET_BY_NAME_COUNTRY:
        return {
          ...state,
          countriesName: action.payload
        }
    case GET_ALL_ACTIVITIES:
      return{
        ...state,
         activities: action.payload
      }
    case ADD_ACTIVITIES:
      return {
        ...state,
        activities: [...state.activities,action.payload]
      }
    case DELETE_COUNTRY:
      return {
        ...state,
        countries: action.payload
      }
      case DELETE_ACTIVITIES:
        return{
          ...state,
          activities: action.payload
        }
      case ALL_FAVORITES:
        return {
          ...state, favorites:[...state.favorites]
        }
      case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
      case DELETE_FAVORITES:
        return {
          ...state,
          favorites: [...state.favorites].filter(item => item !== action.payload)
        }
        case ORDER_ASC:
      return {
        ...state,
        listOrdered: action.payload,
      };
    case ORDER_DESC:
      return {
        ...state,
        listOrdered: action.payload,
      };
    case GET_BY_TYPE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities].filter(activity=>activity===action.payload)
      }
    case GET_BY_CONTINENT:
      return {
        ...state,
        countries:[...state.countries].filter(country=>country===action.payload)
      }
      case GET_LIST_CONTINENTS:
        return{
          ...state, continents: [...action.payload]
        }
    case SET_PAGE:
        return {
          ...state,
          [action.payload.property]: {
            ...state[action.payload.property],
            page: action.payload.page,
            pageSize: action.payload.pageSize,
            pagedData: action.payload.pagedData,
          },
        };
    default:
      return state;
  }
};

export default appReducers;
