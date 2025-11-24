import axios from "axios";


const BASE_URL = "https://restcountries.com"  //v3.1/all?fields=name,flags,population,region,capital

//All countries
export function getAllCountries(){
    return axios.get(`${BASE_URL}/v3.1/all?fields=name,flags,population,region,capital`)
}


//Countries detail
//`https://restcountries.com/v3.1/name/${name}?fullText=true`
export function getCountryDetail(name:string){
    return axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
                   // https://www.themealdb.com/api/json/v1/1/search.php?s=${query}
}


//Search by name
//http://localhost:5173/name?name=eritrea
export function getCountryByName(query:string) {
  return axios.get(`${BASE_URL}/v3.1/name/${query}`);
}

//Filtering by region
//https://restcountries.com/v3.1/region/{region}
//https://restcountries.com/v3.1/region/europe -THIS WORKS
export function filterByRegion(region:string){
    return axios.get(`https://restcountries.com/v3.1/region/${region}`)
}

//Border countries
 //`https://restcountries.com/v3.1/alpha?codes=${codes}`
 export function getCountryByCode(codes:string){
    return axios.get(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
 }