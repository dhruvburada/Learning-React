import React, { Children } from 'react'
import UserContext from './userContext'

const UserProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
  return (
    <>
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
    </>
  )
}

export default UserProvider