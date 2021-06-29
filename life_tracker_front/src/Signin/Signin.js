import React from 'react'
import "./Signin.css"


let userImg ='https://www.seekpng.com/png/full/365-3651600_default-portrait-image-generic-profile.png'




function Signin() {
    return (
        <div className='Signin'>
            <img id= "userImg" src={userImg} alt="Generic Profile image" />
            <h2>Welcome</h2>

        </div>
    )
}

export default Signin;