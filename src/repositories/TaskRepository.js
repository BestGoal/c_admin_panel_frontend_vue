import { http } from '@/plugins/axios';

class TaskRepository{
      addTask(task)
      {
          return http.post('/Tasks',task).then(res=>{
              return res.data;
          });
      }
}

