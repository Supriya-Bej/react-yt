import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')

    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-amber-600 rounded-xl p-20'>

                <form onSubmit={(e) => {
                    submitHandler(e)
                    }}className='flex flex-col gap-5'>

                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} required className='py-3 px-5 bg-transparent outline-none rounded-full border-2 border-amber-600 placeholder:text-gray-400' type="email" placeholder='Enter Email' />

                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} className='py-3 px-5 bg-transparent outline-none rounded-full border-2 border-amber-600 placeholder:text-gray-400' type="password" placeholder='Enter Password' />

                    <button className='py-3 px-5 outline-none rounded-full border-none bg-amber-600 placeholder:text-white'>Login</button>
                    
                </form>

            </div>
        </div>
    )
}

export default Login
