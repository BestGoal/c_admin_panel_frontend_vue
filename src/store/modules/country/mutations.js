export default {
    // communicate directly with the state variables
    newSignature : (state,signature) => state.apt.threatSignature.push(signature),
    newAlterName : (state,alterName) => state.apt.alter_name.push(alterName),
    newCountry : (state,country) => state.country.contenant.push(country),
    setContenant : (state,contenant) => state.ContenantCode = contenant,
    setCountries : (state,countries) => state.countries = countries,
 }