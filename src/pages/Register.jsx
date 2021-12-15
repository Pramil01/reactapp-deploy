import React from 'react'
import { Link } from 'react-router-dom'
import registerImg from '../components/images/image1.png'
export default function register() {
    return (
        <div className='register'>
            <span className="registerTitle">register</span>
            <form action="" className="registerForm">
            <label >Username</label>
                <input className='registerInput' type="text" placeholder='Enter your username'/>
                <label >EmailID</label>
                <input className='registerInput' type="text" placeholder='Enter your email'/>
                <label >Password</label>
                <input className='registerInput' type="password" placeholder='Enter your password'/>
                <button className='registerButton'>register</button>
            </form>
            <button className='registerloginButton'>
                <Link to={"register"}>LOGIN</Link>
            </button>
        </div>
    )
}
