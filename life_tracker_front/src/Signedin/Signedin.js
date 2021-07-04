import React from 'react'
import "./Signedin.css"
import {Link} from 'react-router-dom'

function Signedin() {
    return (
        <div className="signedIn">
            <Link className="linked" to='/'><span>Log Out</span></Link>
        </div>
    )
}

export default Signedin;
