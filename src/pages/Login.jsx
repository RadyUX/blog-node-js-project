import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
    <form >
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button>LOGIN</button>
        <p>this is error</p>
        <span>no account ? <Link to="/register">Register</Link></span>
    </form>
    </div>
  )
}

export default Login