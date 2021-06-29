import React from 'react'
import "./Signin.css"


let userImg ='https://www.seekpng.com/png/full/365-3651600_default-portrait-image-generic-profile.png'




function Signin() {
    return (
        <div className='Signin'>
            <img id= "userImg" src={userImg} alt="Generic Profile" />
            <h2>Welcome</h2>
            <form id="form">
                <span>Sign In</span>
                <input type="text" placeholder="Enter Email" name="email" required />
                <input type="password" placeholder="Enter Password" name="psw" required />
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
                <button type="submit" class="signinbtn">Sign In</button>
            </form>
            <span>Don't have an account?<a href="a" target="_blank">Sign Up</a> Instead</span>
        </div>
    )
}

export default Signin;