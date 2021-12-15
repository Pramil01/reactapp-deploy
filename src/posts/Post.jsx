import React from 'react'
import img3 from '../components/images/image4.jpg'

export default function post() {
    return (
        <div className='post'>
            <img className='postImg' src={img3} alt="" srcset="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">MUSIC</span>
                    <span className="postCat">LIFE</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur 
                </span>
                <hr />
                <span className="postDate">1 minute ago</span>
             <p className='postDes'>Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Ipsum, et incidunt illo illum dolorem atque 
                  ipsam nulla quas libero dolore voluptate modi 
                  doloribus, laboriosam obcaecati earum possimus
                   deserunt! Adipisci, quidem asperiores. Est quaerat
                    totam fugiat sapiente incidunt dignissimos cumque,
                  tempore, laboriosam quibusdam eligendi beatae dolores.</p>
            </div>
        </div>
    
    )
}
