import axios from 'axios';

export default {

    changeSector: ({ commit }, Sector) => commit("setSector",Sector),

    async SaveSections ({ commit }, departments){
        console.log(departments);


        const response = await axios.post('https://localhost:44392/api/Sections',departments);
        commit("SameSectors",departments)
    } ,

    async addEmployee({ commit }, payload ) {
        console.log(payload);
        const response = await axios.post('https://localhost:44392/api/Employee',payload);
        commit("saveOrg", payload );
    },

    removeOrganization : ({ commit }, index) => commit("removeOrganization",index),

    async save({commit},sector)
    {
        const response = await axios.post('https://localhost:44392/api/APTs',sector);
        commit('newTask',response.data)
    },

    async fetchSections({ commit })
    {
        const response = await axios.get('https://localhost:44392/api/Sections');
        commit('setSections',response.data)
    },
    async fetchEmployees({ commit })
    {
        const response = await axios.get('https://localhost:44392/api/Employee');
        commit('setEmployees',response.data)
    },



}
