import React from "react";
import "./Activities.css"


function Activities() {

    return(
        <div className="card">
            <span className="label">This is a test Label</span>
            <div id="data">
                    <span className="score">1.09</span>
                <div id="right">
                    <div className="carrotContainer">
                        <h3 className="carrot"> &#94;</h3>
                    </div>
                    <span className="gains">50%</span>
                </div>
            </div>
        </div>
    )
}
export default Activities;