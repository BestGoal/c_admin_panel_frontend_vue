import axios from 'axios';

export default {
  // newId({ commit }, item) {
  //   commit("addnewId", item);
  // },
  add({ commit }, item) {
    console.log(item);
    axios.post("https://localhost:44392/api/RequestIP" , item).then(
      result => {
        commit("addnewId", item);
        // console.log(result);
      },
      error => {
        console.error(error);
      }
    );
  },
  getAllIp({commit}){
    axios.get("https://localhost:44392/api/RequestIP").then(
      result => {
        // console.log(result);
        // this.data = result.data;
        commit("alldata", result.data);
      },
      error => {
        console.error(error);
      }
    );
  },
  append({commit} , item){
    console.log(item);
    axios.put("https://localhost:44392/api/RequestIP" , item).then(
      result => {
        console.log(result.data);
        commit("alldata", result.data);
        // this.allData = result.data;
      },
      error => {
        console.error(error);
      }
    );
  },
  delete({commit} , id){
    axios.delete("https://localhost:44392/api/RequestIP/" + id).then(
      result => {
        commit("alldata", result.data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
