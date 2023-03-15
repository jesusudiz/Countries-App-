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
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const totalCountries = country.length;
  const totalPages = Math.ceil(totalCountries / countriesPerPage);
  const startCountryIndex = (currentPage - 1) * countriesPerPage;
  const endCountryIndex = startCountryIndex + countriesPerPage;
  const currentCountries = country.slice(startCountryIndex, endCountryIndex);
  const [currentPageCountries, setCurrentPageCountries] = useState([]);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const renderPaginationInfo = () => {
    setCurrentPageCountries(currentCountries);
  }
  useEffect(() => {
    dispatch(getAllCountry());
    setIsLoading(false);
  }, [dispatch]);

  return (
    <>
      <div className="container-country">
        {isLoading ? (
          <Loader />) : (
          currentCountries.map(pais => <Country key={pais.id} pais={pais} />)
        )}
      </div>
      <div className='btn-page-content'>
        <div className='btn-page'>
          <button disabled={currentPage === 1} onClick={handlePrevClick}>
            Atrás
          </button>
          <span>
            {currentPage} de {totalPages}
          </span>
          <button disabled={currentPage === totalPages} onClick={handleNextClick}>
            Adelante
          </button>
        </div>

      </div>
    </>
  )
}
