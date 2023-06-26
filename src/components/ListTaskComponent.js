import React, { useState, useEffect } from "react";
import TaskService from "../service/TaskService";
import { Link } from "react-router-dom";


function ListTaskComponent() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
      TaskService.getAllTasks().then((response)=>{
        setTasks(response.data)
        console.log(response.data);
      }).catch(error=>{
        console.log(error);
      })
    }, [])
    const deleteTask=(id)=>{
        TaskService.deleteTask(id).then((response)=>{
            TaskService.getAllTasks().then((response)=>{
                setTasks(response.data)
            }).catch(error=>console.log(error))
        }).catch(error=>console.log(error))
    }

    return (
        <div className="container">
            <h2 className="text-center">Task List</h2>
            <Link to="/add-task" className="btn btn-primary mb-2">Add Task</Link>
            <table className="table table-bordered table-striped ">
                <thead className="text-center">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Start date</th>
                    <th>End date</th> 
                    <th>Status</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        tasks.map(
                            task=>
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.startDate}</td>
                                <td>{task.endDate}</td>
                                <td>{task.status}</td>
                                <td>
                                    <Link to={`/update-task/${task.id}`} className="btn btn-info">update</Link>
                                    <button className="btn btn-danger" onClick={()=>deleteTask(task.id)}>Delete?</button>
                                </td>
                             </tr>

                        )
                    }
                </tbody>
            </table>

        </div>
  )
}

export default ListTaskComponent