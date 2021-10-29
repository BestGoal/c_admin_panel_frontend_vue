import axios from 'axios';

export default {

    changeSector: ({ commit }, Sector) => commit("setSector",Sector),

    async SaveSectors ({ commit }, sector) {
      const response = await axios.post('https://localhost:44392/api/Sector',sector);
      console.log(sector);
      commit("SameSectors", sector)
    },


  async AddOrg ({ commit }, org ) {
      console.log(org);
      const response = await axios.post('https://localhost:44392/api/Organization',org);
     commit("saveOrg", org );
      },

    removeOrganization : ({ commit }, index) => commit("removeOrganization",index),

  async fetchSectors({ commit })
  {
    const response = await axios.get('https://localhost:44392/api/Sector');
    commit('SameSectors',response.data)
  },

    async fetchOrganizations({ commit })
    {
        const response = await axios.get('https://localhost:44392/api/Organization');
        commit('setOrganization',response.data)
    },
}
