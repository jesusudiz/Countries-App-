import React, { useEffect, useState } from 'react'
import { Country } from './Country';
import { useSelector, useDispatch } from "react-redux";
import { allFavorites } from '../redux/actions';
import "./FavoritesList.css";
import { Loader } from './Loader'




export const FavoritesList = () => {
  const favoritesCountry = useSelector(state => state.favorites)
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    dispatch(allFavorites());
    setIsLoading(false);
  }, [dispatch]);

  return (
   <>
    <div className="container-favorites">
      {isLoading ? (
        <Loader />) : (
        favoritesCountry.map(pais => <Country key={pais.id} pais={pais} />)
      )}
    </div>

  </>
  )
}
