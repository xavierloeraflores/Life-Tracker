import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'

import SignedIn from '../Signedin/Signedin'
import SignedOut from '../Signedout/Signedout'

let logo="https://svgsilh.com/svg/3199472.svg"


function Nav(){
    return (
        <div className="Nav">
            <Link to='/'><img width="50px" src={logo} alt="logo" /></Link>

            
            <div id='links'>
                <Link to='activity'><span>Activity</span></Link>
                <Link to='nutrition'><span>Nutrition</span></Link>
                <Link to='exercise'><span>Exercise</span></Link>
                <Link to='sleep'><span>Sleep</span></Link>
            </div>

            <SignedOut />
            <SignedIn />



        </div>
    );
}


export default Nav;
