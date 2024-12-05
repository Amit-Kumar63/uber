import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className='bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-10 flex flex-col justify-between h-screen w-full'>
      <img className='ml-5 w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='bg-white px-5 py-5'>
        <h1 className='text-2xl font-semibold'>Get Started with Uber</h1>
        <Link to='/login' className='mt-4 bg-black text-white py-2 px-4 rounded flex justify-center items-center'>Continue</Link>
      </div>
    </div>
    </div>
  )
}

export default Home