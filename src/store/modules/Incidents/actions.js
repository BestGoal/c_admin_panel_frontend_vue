import axios from 'axios';

export default {
  async fetchIncidents({ commit })
  {
    const response = await axios.get('https://localhost:44392/api/Incident');
    commit('setIncidents',response.data)
  },
  async addIncident({commit},item)
  {
    console.log(item);
    commit('addIncidence', item);
    const response = await axios.post('https://localhost:44392/api/Incident',item);

  },
  deleteIncident({commit}, item){
    commit('deleteIncident',item);
  },
  editIncident({commit}, item){
    commit('editIncident',item);
  },
  addComment({ commit }, item) {
    commit("addComment", item);
  },

  setIncident ({commit} , item){
    commit("setSelecteItem",item)
},
}
