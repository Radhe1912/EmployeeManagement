import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className="border-2 border-emerald-600 p-20">
                <form className='flex flex-col items-center justify-center'>
                    <input required
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className='outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-gray-400' 
                        type="email" placeholder='Enter your email' />
                    <input required
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className='mt-5 outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-gray-400'
                        type="password" placeholder='Enter your password' />
                    <button onClick={(e)=>{handleSubmit(e)}} className='text-white mt-5 outline-none bg-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login