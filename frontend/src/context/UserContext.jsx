import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()
const UserContext = ({children}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    fullname: {
      firstName: '',
      lastName: ''
    },
    email: ''
  })

  return (
    <div>
      <UserDataContext.Provider value=
      {{
        user, 
        setUser,
        isLoading, 
        setIsLoading
        }}>
      {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext