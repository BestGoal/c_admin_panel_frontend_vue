export default {
    allEmployees: (state)=>state.employees,
    getTableHeaders:(state) => state.headers,
    getAddDialogStatus:(state) => state.addDialogeStatus,
    getSection: (state) => state.sections,
    getDepartments : (state) => state.departments,
    getIsLoggin : (state) => state.loggedin,
    getResponse : (state) => state.response,
}