import React from 'react'
import './Xcard.css';

const Xcard=({name, duration, intensity, time}) => {
    return (
        <div className="Xcard">
            <span className="timestamp">{time}</span>
            <div className="cardInfo">
                <div>
                    <h3 >{name}</h3>
                </div>
                <div className="cardData">
                    <div className="dataBit">
                        <span>Duration</span>
                        <span>{duration}</span>
                    </div>
                    <div className="dataBit">
                        <span>Intensity</span>
                        <span>{intensity}/10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xcard;
