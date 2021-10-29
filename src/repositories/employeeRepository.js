import { http } from '@/plugins/axios';
//import store from './store'


class EmployeeRepository{

    login(user) {
        return http
          .post(`/Employer`, user)
          .then(response => {
            if (response.data) {
             localStorage.setItem('user', JSON.stringify(response.data));
             return response.data;
            }
            
          }
          );
      }
}

export default new EmployeeRepository();

