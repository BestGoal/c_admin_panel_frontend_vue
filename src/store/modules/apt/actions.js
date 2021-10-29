import axios from 'axios';

export default {
    // its calling mutation method from mutation file ("newSignature")
    setKey : ({commit}, key) => commit("searchKey",key),
    AddSignature :({ commit },signature) => commit("newSignature",signature),
    AddAlternativeName :({ commit },alterName) => commit("AddAlterName",alterName),
    AddGroup: ({ commit }, group) => commit("newGroup", group),
    AddCountry: ({ commit }, country) => commit("AddCountryToApt",country),
    AddTargetCountry: ({ commit }, targeted) => commit("TargetCountry", targeted),
    AddContent: ({ commit }, contents) => commit("setContent", contents),
    removeCountry : ({ commit }, index) => commit("removeCountry",index),
    removeTargeted  : ({ commit }, index) => commit("removTargeted",index),
    removeAlternativeName  : ({ commit }, index) => commit("removeAlternativeName",index),
    AddFiles : ({ commit }, files) => commit("setFiles",files),
    selectedApt : ({ commit }, apt) => commit("selectedApt",apt),

    async save({commit },apt)
    {
        const response = await axios.post('https://localhost:44392/api/APTs',apt);
        commit('newTask',response.data)
    },
    async fetchApts({ commit })
    {
        const response = await axios.get('https://localhost:44392/api/APTs');
        commit('allApts',response.data)
    }

}
