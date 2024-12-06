import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({children}) => {
  const { isLoading, setIsLoading, setUser } = useContext(UserDataContext)

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {
      if(!token){
        navigate('/login')
    }
    }, [token])

    ;(async () => {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (res.status === 200) {
                setIsLoading(false)
                setUser(res.data)
            }
        }).catch(err => {
            console.log(err);
            localStorage.removeItem('token')
            navigate('/login')            
        })
    })()

    if (isLoading) {
      return (
        <div>Loading...</div>
      )
    }

  return (
    <>
        {children}
    </>
  )
}

export default UserProtectWrapper