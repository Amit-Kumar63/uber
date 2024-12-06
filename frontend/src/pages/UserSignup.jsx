import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      fullname: {
      firstname:firstName,
      lastname: lastName,
      },
      email:email,
      password: password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, userData)
    if (response.status === 201) {
      setUser(response.data)
      localStorage.setItem('token', response.data.token)
      navigate('/home')
    }
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
        <h3 className='font-semibold text-base'>What's your name</h3>
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

export default UserSignup