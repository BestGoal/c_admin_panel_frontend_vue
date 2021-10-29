export default {
    // communicate directly with the state variables
    AddAlterName(state, alterName) {

        let names = state.apt.alternativeNames;
        let max = Math.max(names.map(name => name.Id).push(0));
        alterName.Id = max + 1;
        state.apt.alternativeNames.push(alterName);

    },
    newGroup: (state, group) => state.apt.name = group,
    newSignature : (state,signature) => state.apt.threatSignatures.push(signature),
    AddCountryToApt : (state, country) => state.apt.originCountries.push(country),
    TargetCountry: (state, targeted) => state.apt.targetedCountries.push(targeted),
    removeCountry : (state,id) => state.apt.originCountries =  state.apt.originCountries.filter(con => con.Id != id),
    removTargeted : (state,id) => state.apt.targetedCountries =  state.apt.targetedCountries.filter(con => con.Id != id),
    removeAlternativeName : (state,id) => state.apt.alternativeNames =  state.apt.alternativeNames.filter(con => con.Id != id),
    setContent : (state,payload) => state.apt.contents.push(payload),
    setFiles : (state,files) => state.apt.Attachments = files,
    allApts : (state,apts) => state.apts = apts,
    selectedApt : (state,apt) => state.selectedApt = apt,
    searchKey : (state,key) => state.searchKey = key,
    setEditApt : (state,apt) => {state.apt = apt; state.editedApt = apt},


 }
