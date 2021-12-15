import React from 'react'
import  image from './images/bgimage.jpg'
import {Link} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function Topbar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
            <i class="topIcons fab fa-instagram"></i>
            <i class="topIcons fab fa-facebook-square"></i>
            <i class="topIcons fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to={"/"}>HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link  className='link' to={"/login"}>CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                         <Link  className='link' to={"/write"}>WRITE</Link>
                    </li>
                    <li className='topListItem'>
                         <Link  className='link' to={"/login"}>
                             {user && "LOGOUT"}
                         </Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        
                        <img className='topImage' src={image} alt="" srcset="" />
          
                       
                    ) : (
                        <ul className='topList'>
                        <li className='topListItem'>
                        <Link className='linklogin' to={"login"}>LOGIN</Link> 
                        <Link  className='link' to={"register"}>REGISTER</Link>
                        </li>
                    </ul>
                    )
                }
             <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
