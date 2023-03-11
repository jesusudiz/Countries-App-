const axios = require("axios");
const {Country} = require("../db.js")
const URL = 'https://restcountries.com/v3/all'

const getInfoApi = async () => {
    const response = await axios.get(`${URL}`)
   
    const countries = response.data.map(country => {    
        return {
            id: country.cca3,
            nombre: country.name.common,
            bandera: country.flags[0],
            continente: country.continents[0],
            // region: country.region,
            capital: country.capital? country.capital[0]:country.name.common,
            subregion: country.subregion,
            area: country.area,
            poblacion: country.population,
            mapa: country.maps.googleMaps,
            // moneda: country.currencies && Object.keys(country.currencies).length > 0 ? `${country.currencies[Object.keys(country.currencies)[0]].name} (${country.currencies[Object.keys(country.currencies)[0]].symbol})` : ""

        }

    })
  
   for (const country of countries) {
    await Country.create(country);
    }
}

getInfoApi()

module.exports = {
    getInfoApi
}