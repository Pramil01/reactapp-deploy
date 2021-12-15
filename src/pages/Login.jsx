import React from 'react'
import { Link } from 'react-router-dom'
import login from '../pages/Register'

import loginImg from '../components/images/image1.png'
export default function Login() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label >EmailID</label>
                <input className='loginInput' type="text" placeholder='Enter your email'/>
                <label >Password</label>
                <input className='loginInput' type="password" placeholder='Enter your password'/>
                <button className='loginButton'>
                    <Link to={"register"}>LOGIN</Link>
                </button>
            </form>
            <button className='RegisterButton'>
                     <Link to={"/login"}>REGISTER</Link>
            </button>
        </div>
    )
}
