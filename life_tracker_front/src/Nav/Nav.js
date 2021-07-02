import React from 'react';
import './Nav.css';


import SignedIn from '../Signedin/Signedin'
import SignedOut from '../Signedout/Signedout'

let testImg="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png"


function Nav(){
    return (
        <div className="Nav">
            <a><img width="50px" src={testImg} alt="danke" /></a>
            
            <div id='links'>
                <a href="a" target="_blank">Activity</a>
                <a href="a" target="_blank">Nutrition</a>
                <a href="a" target="_blank">Excersise</a>
                <a href="a" target="_blank">Sleep</a>
            </div>

            <SignedOut />
            <SignedIn />



        </div>
    );
}


export default Nav;
