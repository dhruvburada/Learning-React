import React, { useContext } from 'react'
import UserContext from './userContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate();
  return (
    <>
    <div>Login</div>
    <input type="text" placeholder='please enter your username' onChange={(e)=>setUser(e.target.value)}></input>
    <button onClick={()=>navigate('/dashboard')}>Login</button>
    </>
    
  )
}

export default Login