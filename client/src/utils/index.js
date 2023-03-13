
import { useDispatch } from "react-redux";
import * as action from '../redux/actions'


// * Esta Funcion maneja almacena todos los eventos del componente Navbar y Header

export function EventsApp (event){
    const dispatch = useDispatch();
    switch(event.target.value) {
        case 'Orden Alfabetico ASC':
            dispatch(action.orderAsc())
            break;
        case 'Orden Alfabetico DESC':
            dispatch(action.orderDesc())
            break;
        // case 'Menor Población':
        //     dispatch()
        //     break;
        // case 'Mayor Poblacion':
        //     dispatch()
        //     break;
        case 'America':
            dispatch(action.getByContinent('America'))
            break;
        case 'Europa':
            dispatch(action.getByContinent('Europe'))
            break;
        case 'Africa':
            dispatch(action.getByContinent('Africa'))
            break;
        case 'Oceania':
            dispatch(action.getByContinent('Oceania'))
            break;
        case 'Antartida':
            dispatch(action.getByContinent('Antarctica'))
            break;
        case 'Asia':
            dispatch(action.getByContinent('Asia'))
            break;
        case 'North America':
            dispatch(action.getByContinent('North America'))
            break;
        case 'South America':
             dispatch(action.getByContinent('South America'))
             break;
        // case 'Favoritos':
        //     dispatch(action.ALL_FAVORITES())
        //     break;
        // case 'Agregar':
        //     dispatch()
        //     break;
        default:
            return 'no se realizo un evento'

    }


}


