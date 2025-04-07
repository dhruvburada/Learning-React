import React, { useContext } from 'react'
import UserContext from './userContext'

const Demo = () => {
    const {user} = useContext(UserContext);
  return (
    <div>User : {user}</div>
  )
}

export default Demo