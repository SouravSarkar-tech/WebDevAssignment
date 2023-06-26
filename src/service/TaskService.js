import axios from "axios";

const Task_Api="http://localhost:8080/getAll";

class TaskService{
    getAllTasks(){
        return axios.get(Task_Api);
    }


    addTask(task){
        return axios.post("http://localhost:8080/addTask",task);
    }

    getTask(id){
        return axios.get("http://localhost:8080/getTask/"+id);
    }
    updateTask(id,task){
        return axios.put("http://localhost:8080/updateTask/"+id,task);
    }

    deleteTask(id){
        return axios.delete("http://localhost:8080/deleteTask/"+id);
    }
}

export default new TaskService();