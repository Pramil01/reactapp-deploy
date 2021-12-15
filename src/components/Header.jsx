import React from 'react'
import img from '../components/images/image2.jpg'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitle">
               <span className='titlesm'>React.js and API</span>
               <span className='titlelm'>Blog</span>
            </div>
            <img className='img' src={img} alt="" srcset="" />
        </div>
    )
}
