import React from 'react';
import './Nav.css';




let testImg="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png"


function Nav(){
    return (
        <div className="Nav">
            <a><img width="50px" src={testImg} alt="danke" /></a>
            
            <div id='links'>
                <a href="a" target="_blank">Activity</a>
                <a href="a" target="_blank">Excersise</a>
                <a href="a" target="_blank">Nutrition</a>
                <a href="a" target="_blank">Sleep</a>
            </div>

            <div id="signedOut">
                <a id="logIn" href="a" target="blank">Log In</a>
                <a id="Register" href="a" target="blank">Register</a>
            </div>
            <div id="signedIn">
                <a id="logOut" href="a" target="blank">Log Out</a>
            </div>

        </div>
    );
}


export default Nav;
