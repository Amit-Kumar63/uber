import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault();
    setUserData({
      email:email,
      password: password
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
      <img className='w-16' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s'/>
      <form className='mt-8' onSubmit={submitHandler}>
        <h3 className='font-semibold text-base'>What's your phone email</h3>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='px-4 py-2 mt-3 border border-gray-300 rounded-md w-full placeholder:text-base' 
        type="email" 
        placeholder='Enter your email'
        required/>
        <h3 className='font-semibold text-base mt-5'>Enter Password</h3>
        <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='px-4 py-2 mt-3 border border-gray-300 rounded-md w-full placeholder:text-base' 
        type="password" 
        placeholder='Enter your password'
        required/>
        <button className='mt-8 bg-black font-semibold w-full text-white py-2 px-4 rounded flex justify-center items-center'>Login</button>
      </form>
      <p className='text-center mt-4 text-sm'>New here? <Link to={'/captain-signup'} className='text-blue-600 font-semibold'>Register as a Captain</Link></p>
    </div>
    <div>
      <Link to={'/login'} className='text-white py-2 px-4 rounded flex justify-center items-center bg-[#d5622d] font-semibold'>Sign in as User</Link>
    </div>
  </div>
  )
}

export default CaptainLogin