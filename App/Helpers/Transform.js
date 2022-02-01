export const formatCountries = (countries)=>{
  return countries.map((country =>{
    return {
      ...country,
      value : country.country
    }
  }))
}
