import axios from 'axios';

export default {
    // its calling mutation method from mutation file ("newSignature")
    addSignature :({ commit },signature) => commit("newSignature",signature),
    AddAlternativeName :({ commit },alterName) => commit("newAlterName",alterName),
    AddNewCountry : ({ commit }, country) => commit("newCountry",country),
    changeContenant : ({ commit }, Contenant) => commit("setContenant",Contenant),
    async fetchCountries({ commit })
    {
        const response = await axios.get('https://localhost:44392/api/Countries');
        commit('setCountries',response.data)
    },
}
