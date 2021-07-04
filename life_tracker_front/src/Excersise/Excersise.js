import React from 'react'
import "./Excersise.css"
import Xcard from '../Xcard/Xcard'

function Excersise() {
    return (
        <div className="Exercise">
            <h1>Danke</h1>
            <div id="ePage">
                <button>Add Excersise</button>
                <div id="exercises">
                    <Xcard />
                    <Xcard />
                    <Xcard />
                    <Xcard />
                </div>

            </div>
        </div>
    )
}

export default Excersise;
