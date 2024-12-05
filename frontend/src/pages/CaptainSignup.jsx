import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = async (e) => {
    e.preventDefault();
    setUserData({
      fullname: {
      firstName:firstName,
      lastName: lastName,
      },
      email:email,
      password: password
    })
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>
      <form className='mt-8' onSubmit={submitHandler}>
        <h3 className='font-semibold text-base'>What's our Captain's name</h3>
        <div className='flex gap-2 mb-5'>
        <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className='px-4 py-2 mt-3 border border-gray-300 rounded-md w-1/2 placeholder:text-base' 
        type="text"
        placeholder='First name'
        required/>
                <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className='px-4 py-2 mt-3 border border-gray-300 rounded-md w-1/2 placeholder:text-base' 
        type="text" 
        placeholder='Last name'
        required/>
        </div>
        <h3 className='font-semibold text-base'>What's our Captain's phone email</h3>
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
      <p className='text-center mt-4 text-sm'>Already have an account? <Link to={'/login'} className='text-blue-600 font-semibold'>Login here</Link></p>
    </div>
    <div>
      <p className='text-[8px]'>
        By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affliates. Message and data rates may apply.
      </p>
    </div>
  </div>
  )
}

export default CaptainSignup