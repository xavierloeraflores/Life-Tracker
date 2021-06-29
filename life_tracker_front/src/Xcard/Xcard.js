import React from 'react'
import './Xcard.css';

function Xcard() {
    return (
        <div className="Xcard">
            <span className="timestamp">Today @ 4:44</span>
            <div className="cardInfo">
                <div>
                    <h3 >Dankee</h3>
                </div>
                <div className="cardData">
                    <div className="dataBit">
                        <span>Duration</span>
                        <span>30</span>
                    </div>
                    <div className="dataBit">
                        <span>Intensity</span>
                        <span>1/10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xcard;
