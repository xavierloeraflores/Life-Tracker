import React from "react"
import "./Activity.css"
import Activities from "../Activities/Activities";


function Activity() {

    return(
        <div className="Activity">
            <h1>Activity Feed</h1>
            <div id="Activities">

                <Activities />
                <Activities />
                <Activities />
                <Activities />
                
            </div>
        </div>
    )
}

export default Activity;