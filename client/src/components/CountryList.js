import React , { useEffect }  from 'react'
import {Country} from './Country';
import {useSelector,useDispatch} from "react-redux";
import { getAllCountry } from '../redux/actions';
import "./CountryList.css";

export const CountryList = () => {
const  country = useSelector(state => state.countries)
const dispatch = useDispatch();  

useEffect(() => {
  dispatch(getAllCountry());
}, [dispatch]);

  return (
  
    <div className = "container-country">
      {country.map(pais => <Country key={pais.id} pais={pais} />)}
    </div>
  )
}
