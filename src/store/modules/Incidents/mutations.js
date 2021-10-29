export default {
  deleteIncident: (state, Incident) => {
    state.Incidents = state.Incidents.filter( obj => {
      if (obj.id == Incident.id) return false;
      return true;
      }
    );
  },
  editIncident: (state, Incident) => {
    state.Incidents = state.Incidents.map( obj => {
        if (obj.id == Incident.id) {
          // console.log(state.Sver);
          // console.log(Incident);
          // Incident.Sver = state.Sver.find(obj => obj.code === Incident.Sver) ;
          // Incident.Org= state.Org.find(obj => obj.code === Incident.Org) ;
          // Incident.Status= state.Status.find(obj => obj.code === Incident.Status) ;
          // Incident.Cat= state.Cat.find(obj => obj.code === Incident.Cat) ;
          // Incident.Sector= state.Sector.find(obj => obj.code === Incident.Sector) ;
          // Incident.Urgancey= state.Urgancey.find(obj => obj.code === Incident.Urgancey) ;
          // console.log(Incident);
          return Incident;
        }
        return obj;
      }
    );
  },
  addIncidence: (state, Incidence) => state.Incidents.push(Incidence),
  setIncidents :(state,incidents) => state.Incidents = incidents,
  newIncidnt : (state,incident) => state.IncidentsCat.push(incident),
  addComment: (state, comment) => {
    if (state.comments.length > 1) {
      comment.id = state.comments[state.comments.length - 1];
    }
    state.comments.push(comment);
  },

  setSelecteItem: (state, Incidence) => state.selectedIncidence = Incidence,
}
