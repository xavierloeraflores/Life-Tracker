import React from 'react';
import './Hero.css';



let heroImg = "https://www.menshealthatlanta.com/wp-content/uploads/2019/01/in_shape_senior_man_in_gym.png"
function Hero(){
    return (
        <div className="Hero">
            <div id="info">
                <h1>LifeTracker</h1>
                <h3>Helping you take back control of your world</h3>
            </div>
            <div id="heroDiv">
                <img id='heroImg' src={heroImg} alt="People exercising" />
            </div>
        </div>
    );
}


export default Hero;