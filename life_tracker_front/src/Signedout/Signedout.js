import React from 'react'
import UserContext from '../UserContext'
import  {Link} from 'react-router-dom';
import "./Signedout.css"

function Signedout() {
    return (
        <div className="signedOut">
                <Link className="linked" to="/signin"><span>Log In</span></Link>
                <Link className="linked" to="/register"><span>Register</span></Link>
                
        </div>
    )
}

export default Signedout
