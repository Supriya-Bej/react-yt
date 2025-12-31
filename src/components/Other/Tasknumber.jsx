import React from 'react'

const Tasknumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-full'>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-blue-400">
        <h2 className='text-4xl font-medium'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-semibold'>New Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-green-400">
        <h2 className='text-4xl font-medium'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-semibold'>Completed Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-yellow-400">
        <h2 className='text-4xl font-medium'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-semibold'>Accepted Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 bg-red-400">
        <h2 className='text-4xl font-medium'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-semibold'>Failed Task</h3>
      </div>
    </div>
  )
}

export default Tasknumber
