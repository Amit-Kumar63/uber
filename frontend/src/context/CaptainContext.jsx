import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext()

export const CaptainContext = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
    const [captain, setCaptain] = useState({
        fullname: {
            firstName: '',
            lastName: ''
          },
          email: '',
          vehicle: {
            color: '',
            plate: '',
            capacity: '',
            vehicleType: ''
          }
    })
  return (
    <CaptainDataContext.Provider value=
    {{
        captain, 
        setCaptain, 
        isLoading, 
        setIsLoading
        }}>
      {children}
    </CaptainDataContext.Provider>
  )
}
