export default {
    // communicate directly with the state variables
    setOrganization : (state,organization) => state.organizations = organization,
    AddOrganizationToSec : (state, organization) => state.Orgs.push(organization),
    removeOrganization : (state,id) => state.organizations =  state.organizations.filter(org => org.id != id),
    SameSectors: (state,sectors) => state.sectors = sectors,
    saveOrg (state , payload) {
       state.organizations.push(payload)
    }

 }
