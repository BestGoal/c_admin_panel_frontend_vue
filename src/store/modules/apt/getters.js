export default {
    allApts: (state)=> {
        if (state.searchKey == ""){ return state.apts}
        else{ return state.apts.filter(apt => apt.name.includes(state.searchKey));}
    },

    getTableHeaders:(state) => state.headers,
    getGroup : (state) => state.apt.name,
    getAptCountries : (state) => state.apt.originCountries,
    getAptTargeted : (state) => state.apt.targetedCountries,
    getAptAlterName : (state) => state.apt.alternativeNames,
    getAptThreatSign : (state) => state.apt.threatSignatures,
    GetContent : (state) => state.apt.contents,
    getApt : (state) => state.apt,
    selectedApt : (state) => state.selectedApt,


}



