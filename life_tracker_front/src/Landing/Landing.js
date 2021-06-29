import React from 'react';
import './Landing.css';
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import Categories from '../Categories/Categories'




let heroImg = "https://www.menshealthatlanta.com/wp-content/uploads/2019/01/in_shape_senior_man_in_gym.png"
function Landing(){
    return (
        <div className="Landing">
            <Nav />
            <Hero />
            <Categories />
        </div>
    );
}


export default Landing;