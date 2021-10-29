import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios

let axiosInstance = axios.create({
    baseURL: `http://localhost:8080/api`,
})

const isHandlerEnabled = (config = {}) => {
    return true;
}



const errorHandler = (error) => {
    if (isHandlerEnabled(error.config)) {
        // Handle errors
    }

    if (error.response.status === 401) {
        localStorage.removeItem('user');
        console.log("IM INNNN")
        //location.reload(true);
    }
    return Promise.reject({ ...error })
}

const successHandler = (response) => {
    if (isHandlerEnabled(response.config)) {
        // Handle responses
    }
    return response
}


axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

export const http = axiosInstance