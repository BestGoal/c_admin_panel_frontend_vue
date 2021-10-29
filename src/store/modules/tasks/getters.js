export default {
    allTasks: (state)=>state.tasks,
    getTaskByExpersion : (state) => (exp) => state.tasks.filter(exp),
    getTableHeaders:(state) => state.headers,
    getWhight:(state) => state.weights,
    getImportance : (s) => s.importance,
    getUrgancy : (s) => s.urgancy,
    getSelectedTask : (s) => s.selectedTask,
    gettasked_for : (s) => s.tasked_for,
    getsecureType : (s) => s.secureType,
    getstatus : (state)=>state.status,
    

    

    taskById: (state) => (id) => {
        return state.tasks.find(obj => obj.id === id);
      },
    
}