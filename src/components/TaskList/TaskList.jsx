import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id='taskList' className='flex overflow-x-auto items-center justify-start flex-nowrap gap-5 h-[50%] w-full py-5'>

      {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask />
        }
        if(elem.NewTask){
          return <NewTask />
        }
        if(elem.completed){
          return <CompleteTask />
        }
        if(elem.failed){
          return <FailedTask />
        }
      })}
    </div>
  )
}

export default TaskList
