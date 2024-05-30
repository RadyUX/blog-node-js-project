import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
    <form >
        <input required type="text" placeholder='username'/>
        <input required type="email" placeholder='email'/>
        <input required type="password" placeholder='password'/>
        <button>REGISTER</button>
        <p>this is error</p>
        <span>have account ? <Link to="/login">Login</Link></span>
    </form>
    </div>
  )
}

export default Register