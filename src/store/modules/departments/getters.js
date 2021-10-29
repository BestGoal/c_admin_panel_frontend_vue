export default {

   // getSectors: (state) => state.sectors,
    getOrganizations : (state) => state.employees.filter(sec=>sec.sector == state.SectorCode),
    getOrgs : (state) => state.Orgs,
    GetSection : (state) => state.departments,
    GetEmployees: (state) => state.employees,
     
}



