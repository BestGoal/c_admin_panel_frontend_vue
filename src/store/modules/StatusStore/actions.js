import axios from 'axios';

export default {

    changeSector: ({ commit }, Sector) => commit("setSector",Sector),

    async SaveSectors ({ commit }, statusType) {
        console.log(statusType);

      commit("SameSectors",statusType);
      const response = await axios.post('https://localhost:44392/api/statusTypes',statusType);

     },
     async fetchstatusTypeId({ commit })
    {
        const response = await axios.get('https://localhost:44392/api/statusTypes');
        commit('setStatusType',response.data)
    },


    async fetchStatuses({ commit })
    {
        const response = await axios.get('https://localhost:44392/api/Status');
        commit('SetStatus',response.data)
    },

     async AddOrg ({ commit }, statusTypes ) {
       console.log(statusTypes);
       const response = await axios.post('https://localhost:44392/api/Status',statusTypes);
      commit("saveOrg", statusTypes);
    },

    removeOrganization : ({ commit }, index) => commit("removeOrganization",index),

    async save({commit},sector)
    {
        const response = await axios.post('https://localhost:44392/api/APTs',sector);
        commit('newTask',response.data)
    },

    async fetchOrganizations({ commit })
    {
        const response = await axios.get('https://localhost:44392/api/Country');
        commit('setOrganization',response.data)
    },


}
