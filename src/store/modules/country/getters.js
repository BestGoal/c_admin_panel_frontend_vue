export default {
    getContenants: (state)=>state.contenants,
    getCountries : (state)=>state.countries.filter(con=>con.contenant == state.ContenantCode),


    
}