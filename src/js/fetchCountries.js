 
const URL = `https://restcountries.eu/rest/v2`;

function fetchCountries(nameCountry) {
   return fetch(`${URL}/name/${nameCountry}`)
           .then(res =>  res.json() );
}

export default { fetchCountries };