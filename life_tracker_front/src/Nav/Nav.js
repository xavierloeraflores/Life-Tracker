import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'

import SignedIn from '../Signedin/Signedin'
import SignedOut from '../Signedout/Signedout'

let logo="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png"


function Nav(){
    return (
        <div className="Nav">
            <Link to='/'><img width="50px" src={logo} alt="logo" /></Link>

            
            <div id='links'>
                <Link to='activity'><span>Activity</span></Link>
                <Link to='nutrition'><span>Nutrition</span></Link>
                <Link to='Exercise'><span>Exercise</span></Link>
                <Link to='Sleep'><span>Sleep</span></Link>
            </div>

            <SignedOut />
            <SignedIn />



        </div>
    );
}


export default Nav;
