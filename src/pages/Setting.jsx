import React from 'react'
import settingImg from '../components/images/image7.jpg'
import SideBar from '../components/SideBar'

export default function Setting() {
    return (
        <div className='setting'>
            <div className="settingWrapper">
               <div className="settingTitle">
                   <div className="settingUpadteTitle">Update Your Account</div>
                   <div className="settingDeleteTitle">Delete Account</div>
               </div>
               <form  className="settingForm">
                   <label >Profile picture</label>
                   <div className="settingPP">
                   <img className='settingImg' src={settingImg} alt="" srcset="" />
                    <label htmlFor="fileInput">
                    <i className="settingPPIcon fas fa-user-circle"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}}/>
                    </div>
                    <label >UserName</label>
                    <input type="text" placeholder='Neha yednurwar'/>
                    <label >EmailID</label>
                    <input type="text" placeholder='yednurwarneha@gmail.com'/>
                    <label >Password</label>
                    <input type="password" />
                    <button className='settingsSubmit'>Update</button>
               </form>
            </div>
            <SideBar />
        </div>
    )
}
