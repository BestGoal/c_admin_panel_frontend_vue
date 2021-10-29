export default {
    setEmployees : (state,emps) => state.employees = emps,    
    newEmployee : (state,emp) =>  state.employees.push(emp),
    setDialogStatus : (state,status) => state.addDialog = status,
    setLogginStatus : (state,loginStatus) => state.loggedin = loginStatus,
    setResponse : (state,resp) => state.response = resp,

    
 }