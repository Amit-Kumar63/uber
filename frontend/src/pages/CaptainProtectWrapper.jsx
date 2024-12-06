import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainProtectWrapper = ({children}) => {
    const { isLoading, setIsLoading, setCaptain } = useContext(CaptainDataContext)

    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
      if(!token){
        navigate('/captain-login')
    }
    }, [token])

    ;(async () => {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (res.status === 200) {
                setIsLoading(false)
                setCaptain(res.data)
            }
        }).catch(err => {
            console.log(err);
            localStorage.removeItem('token')
            navigate('/captain-login')            
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

export default CaptainProtectWrapper