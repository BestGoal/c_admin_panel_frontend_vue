import axios from 'axios';

export default {
    async fetchTasks({ commit })
    {
        const response = await axios.get('https://localhost:44392/api/Tasks');
        commit('setTasks',response.data)
    },
    setSelecteTask({commit} , item){
        commit("setSelecteItem",item)
    },
    async addTask({commit},task)
    {
        //commit('newTask', task);
        console.log(task);
        const response = await axios.post('https://localhost:44392/api/Tasks',task);
        task.id = response.data.id;
        commit('newTask', task);
        //commit('newTask',response.data)
    },
    async updateTask({commit},task){
        //const response = await axios.put('http://localhost:8080/api/Tasks',task);
        //commit('setTasks',response.data)
    },
    async addCommentToTask ({commit},comment) { commit('addComment',comment) },
    setSelectedTask({commit},comment){

    },
    async changStatus ({commit},task)
    {
        commit('NewStatus', task);

    },

    editstatus({commit}, item){
        commit('editstatus',item);
      },


}
