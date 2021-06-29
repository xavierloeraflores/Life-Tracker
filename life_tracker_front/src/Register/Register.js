import React from 'react'
import "./Register.css"

let userImg ='https://www.seekpng.com/png/full/365-3651600_default-portrait-image-generic-profile.png'





function Register() {
    return (
        <div className='Register'>
            <img id= "userImg" src={userImg} alt="Generic Profile" />
            <h2>Welcome</h2>
            <form id="form">
                <span>Register</span>
                <input type="text" placeholder="Email" name="email" required />
                <input type="text" placeholder="Username" name="username" required />
                <input type="password" placeholder="Password" name="pw" required />
                <div id="names">
                    <input type="text" placeholder="First name" name="firstname" required />
                    <input type="text" placeholder="Last name" name="lastname" required />
                </div>
                <input type="password" placeholder="Repeat Password" name="pw2" required />
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
                <button type="submit" class="signinbtn">Sign In</button>
            </form>
            <span>Already have an account?<a href="a" target="_blank">Sign In</a> Instead</span>
        </div>
    )
}

export default Register;