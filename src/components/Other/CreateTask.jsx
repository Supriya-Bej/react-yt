import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import FailedTask from '../TaskList/FailedTask'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e)=>{
    e.preventDefault()
    setNewTask({title, description, date,category, active:false, newTask:true, failed:false, completed:false})
    const data = userData
    
    data.forEach(function(elem){
      if(asignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
      }
    })
    setUserData(data);

    setTitle('')
    setCategory("")
    setAsignTo("")
    setDate("")
    setDescription('')
    
  }


  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}  className='flex flex-wrap w-full items-start justify-between'>

          <div className='w-1/2'>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
              <input value={title} onChange={(e)=>{
                setTitle(e.target.value)
              }} type="text" placeholder='Make a UI Design' className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
            </div>

            <div className='mt-4'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input value={date} onChange={(e)=>{
                setDate(e.target.value)
              }} type="date" className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
            </div>

            <div className='mt-4'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
              <input value={asignTo} onChange={(e)=>{
                setAsignTo(e.target.value)
              }} type="text" placeholder='Employee Name' className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
            </div>

            <div className='mt-4'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input value={category} onChange={(e)=>{
                setCategory(e.target.value)
              }} type="text" placeholder='Design, Dev, etc' className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
            </div>

          </div>

          <div className='w-1/2'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Decription</h3>
            <textarea value={description} onChange={(e)=>{
                setDescription(e.target.value)
              }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' cols='30' rows='10'></textarea>
            <button onSubmit={(e)=>{
          submitHandler(e)
        }} className='bg-emerald-600 hover:bg-emerald-700 px-5 py-2 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask
