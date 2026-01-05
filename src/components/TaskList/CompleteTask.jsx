import React from 'react'

const CompleteTask = ({data}) => {
  return (
     <div className='shrink-0 h-full p-5 w-[400px] bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-base'>{data.date}</h4>
        </div>
        <h2 className='my-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-3'>{data.description}</p>

        <div className='mt-2'>
          <button className='w-full rounded bg-green-700 py-1 px-2'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
