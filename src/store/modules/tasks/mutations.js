export default {
    setTasks: (state, tasks) => state.tasks = tasks,
    newTask: (state, task) => state.tasks.push(task),
    setAddTaskDialog: (state, status) => state.addTaskDialog = status,
    setEditTaskDialog: (state, status) => state.editTaskDialog = status,
    setDefaultSelectedItem: (state) => state.selectedTask = state.defaultTask,
    setAssignTaskDialog: (state, status) => state.assignTaskDialog = status,
    addComment: (state, comment) => state.selectedTask.comments.push(comment),
    setSelecteItem: (state, task) => state.selectedTask = task,

    editstatus: (state, task) => {
        state.tasks = state.tasks.map(obj => {
            if (obj.id == task.id) {
                return task.status= state.status.find(obj => obj.code === task.status) ; 
            }
            return obj;
        }

        );
    }
}