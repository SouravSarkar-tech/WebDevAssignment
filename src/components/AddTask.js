import React,{useState,useEffect} from 'react'
import {Link, redirect,useParams} from 'react-router-dom'
import TaskService from '../service/TaskService'

const AddTask = () => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('') 
  const [status, setStatus] = useState('')
  const {id}=useParams();   

  const saveTask= (e)=>{
    e.preventDefault();

    if(id){
        const ta1={name,title,description,startDate,endDate,status}
        TaskService.updateTask(id, ta1).then((response)=>console.log(response.data)).catch(error=>console.log(error))
    }
    const ta={name,title,description,startDate,endDate,status}
        console.log(startDate.getYear);
        TaskService.addTask(ta).then((response)=>{console.log(response.data)}).catch(error=>{console.log(error)})
        return redirect('/findAll');
    }

    useEffect(() => {
      TaskService.getTask(id).then((response)=>{
        setName(response.data.name)
        console.log(response.data.name);
        setTitle(response.data.title)
        console.log(response.data.title);
        setDescription(response.data.description)
        setStartDate(response.data.startDate)
        setEndDate(response.data.endDate)
        setStatus(response.data.status)

      }).catch(error=>console.log(error))
    }, [])
    
    const tit=()=>{
        console.log(id);
        if(id){
            return <h2 className='text-center'> update Employee</h2>
        }
        else{
            return <h2 className='text-center'> Add Employee</h2>
        }
    }
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                   { tit()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Name</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Name'
                                    name='name'
                                    className='form-control'
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Title</label>
                                <input
                                    type='text'
                                    placeholder='Enter title of the task'
                                    name='title'
                                    className='form-control'
                                    value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Description</label>
                                <input
                                    type='text'
                                    placeholder='Enter Description'
                                    name='description'
                                    className='form-control'
                                    value={description}
                                    onChange={(e)=>setDescription(e.target.value)}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Start date</label>
                                <input
                                    type='text'
                                    placeholder='yyyy-mm-dd'
                                    name='startDate'
                                    className='form-control'
                                    value={startDate}
                                    onChange={(e)=>setStartDate(e.target.value)}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> End Date</label>
                                <input
                                    type='text'
                                    placeholder='yyyy-mm-dd'
                                    name='endDate'
                                    className='form-control'
                                    value={endDate}
                                    onChange={(e)=>setEndDate(e.target.value)}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Status</label>
                                <input
                                    type='text'
                                    placeholder='Enter status'
                                    name='status'
                                    className='form-control'
                                    value={status}
                                    onChange={(e)=>setStatus(e.target.value)}
                                ></input>
                            </div>
                            <button className='btn btn-success' onClick={(e)=> saveTask(e)}>save</button>
                            <Link to="/findAll" className='btn btn-danger' >Back</Link>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTask