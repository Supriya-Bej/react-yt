import React from 'react'

const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    
    //Log Out Korar por Page reload
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-xxl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{props.data?.firstName ||'User'} 👋
        </span></h1>
      <button onClick={logOutUser} className='bg-red-900 text-lg font-medium text-white px-3 py-1 rounded'>Log Out</button>
    </div>
  )
}

export default Header
