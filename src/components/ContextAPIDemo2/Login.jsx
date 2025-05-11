import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

const Login = () => {
  const {setUser} = useUserContext();
  const navigate  = useNavigate();
  return (
    <>
    <div>Login</div>
    <input type="text" name="username" id="username" placeholder='username' className='m-2' onChange={(e)=>setUser(e.target.value)} />
    <input type="password" name="password" id="password" placeholder='password' className='m-2' />
    <input type="button" value="login" onClick={()=>navigate("/dashboard")} />
    </>
  )
}


export default Login;
