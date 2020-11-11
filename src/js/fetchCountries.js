 
function fetchCountries(nameCountrie) {
   return fetch(`https://restcountries.eu/rest/v2/name/${nameCountrie}`)
        .then(res => res.json());
}

export default { fetchCountries };