export default {
    // communicate directly with the state variables
    setSector : (state,sector) => state.SectorCode = sector,
    setSections : (state,sections) => state.departments = sections,
    setEmployees : (state, employee) => state.employees = employee,
    AddOrganizationToSec : (state, organization) => state.Orgs.push(organization),
    removeOrganization : (state,id) => state.employees =  state.employees.filter(org => org.id != id),
    SameSectors: (state,departments) => state.departments = departments,
    saveOrg (state , payload) {
       state.employees.push(payload)
    } 
 }