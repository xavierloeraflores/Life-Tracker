import React from 'react'
import { useState, useEffect } from 'react'
import "./Signin.css"
import apiclient from '../apiclient'

let userImg ='https://www.seekpng.com/png/full/365-3651600_default-portrait-image-generic-profile.png'




function Signin({ user, setUser }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
      });


    const  signin = async () => {
        const { data, error } = await apiclient.login({ email: "bla44@gmail.com", password: "password" });
        console.log(data)
        console.log(error)
    }
    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
              console.log("invalid email")
        }
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
      };
      if (event.target.name === "password") {
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
    };
    }

    const onSubmit = async(event) =>{
        event.preventDefault()
        const { data, error } = await apiclient.login({ email: form.email, password: form.password });
        console.log("test",data)
        if (data?.user) {
          setUser(data.user);
          apiclient.setToken(data.token);
        }
    }
    
    
    // signin()


    return (
        <div className='Signin'>
            <img id= "userImg" src={userImg} alt="Generic Profile" />
            <h2>Welcome</h2>
            <form id="form" onSubmit={onSubmit}>
                <span>Sign In</span>
                <input type="text" placeholder="Enter Email" name="email" onChange={handleOnInputChange} required value={form.email}/>
                <input type="password" placeholder="Enter Password" name="password" onChange={handleOnInputChange} required value={form.password}/>
                <button className="signinbtn" >Sign In</button>
            </form>
            <span>Don't have an account?<a href="a" target="_blank">Sign Up</a> Instead</span>
        </div>
    )
}

export default Signin;