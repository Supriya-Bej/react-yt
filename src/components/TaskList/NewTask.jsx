import React from 'react'

const NewTask = () => {
  return (
    //  rotable korar jonno  shrink-0 and div e overflow-x-auto dewa hoyeche
      <div className='shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-base'>20 Feb 2024</h4>
        </div>
        <h2 className='my-5 text-2xl font-semibold'>Make a youtube Video</h2>
        <p className='text-sm mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptas.</p>

        <div className='flex justify-between mt-4'>
          <button className='bg-green-700 py-1 px-2 text-sm rounded'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
