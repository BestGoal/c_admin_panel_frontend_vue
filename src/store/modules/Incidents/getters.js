import state from "./state";

export default {
  incidentsTable: (state)=> state.Incidents,
  incidentById: (state) => (id) => {
    return state.Incidents.find(obj => obj.id === id);
  },
  incidentsTableHeader:(state) => state.Headers,
  getCat:(state) => state.category,
  getSector : (state) => state.sector,
  getOrg : (state) => state.org,
  getUrgancy : (state) => state.urgancey,
  getSver : (state) => state.saverity,
  comments: state => index => {
    return state.comments.filter(el => el.postID === index);
  },
  getSelectedIncedent : (s)=>state.selectedIncidence,

  getStatus : (s)=>state.Status
}
