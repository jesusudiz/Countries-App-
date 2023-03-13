import React, { useEffect, useState } from 'react'
import { Country } from './Country';
import { useSelector, useDispatch } from "react-redux";
import { getAllCountry } from '../redux/actions';
import "./CountryList.css";
import { Loader } from './Loader'




export const CountryList = () => {
  const country = useSelector(state => state.countries)
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    dispatch(getAllCountry());
    setIsLoading(false);
  }, [dispatch]);

  return (
   <>
    <div className="container-country">
      {isLoading ? (
        <Loader />) : (
        country.map(pais => <Country key={pais.id} pais={pais} />)
      )}
    </div>

  </>
  )
}
