export default {
    setEmployees : (state,emps) => state.employees = emps,    
    newEmployee : (state,emp) =>  state.employees.push(emp),
    setDialogStatus : (state,status) => state.addDialog = status,
    setLogginStatus : (state,loginStatus) => state.loggedin = loginStatus,
    setResponse : (state,resp) => state.response = resp,
    setReference  (state,detail) {
        state.attachment.name = detail.name;
        state.attachment.id = detail.id;
        state.attachment.type = detail.type;
    },
    setFiles : (state,files) => state.attachment.files = files,    
 }