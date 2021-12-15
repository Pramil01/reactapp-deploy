import React from 'react'
import image from '../components/images/image3.jpg'

export default function SideBar() {
    return (
        <div className='sidebar'>
              <div className="sidebarItem">
                  <span className="sidebarTitle">ABOUT ME</span>
                  <img className='img2' src={image} alt="" srcset="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas ipsa autem soluta distinctio necessitatibus minima molestiae odio animi dolore. </p>
              
              <span className="sidebarTitle">CATEGORIES</span>
              <ul className="slidebarList">
                  <li className="slidebarListItem">Life</li>
                  <li className="slidebarListItem">Space</li>
                  <li className="slidebarListItem">Psycology</li>
                  <li className="slidebarListItem">Music</li>
                  <li className="slidebarListItem">Sport</li>
                  <li className="slidebarListItem">Technolgy</li>
              </ul>
 
              <span className="sidebarTitle">FOLLOW US</span>
               <div className="socialitems"></div>
                    <i  className="socialIcons fab fa-instagram"></i>
                    <i className="socialIcons fab fa-facebook-square"></i>
                    <i className="socialIcons fab fa-twitter-square"></i>
              </div>
        </div>
    )
}
