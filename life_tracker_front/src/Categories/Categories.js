import React from 'react';
import './Categories.css';


let Img = "https://www.helpguide.org/wp-content/uploads/young-woman-performing-pushups-indoors-768.jpg"
let fitnessImg = "https://www.helpguide.org/wp-content/uploads/young-woman-performing-pushups-indoors-768.jpg"
let foodImg = "https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg"
let restImg = "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325353/why-is-sleep-important.jpg"
let plannerImg = "https://assets.entrepreneur.com/content/3x2/2000/20150512050128-shutterstock-124904123.jpeg"


function Categories(){
    return (
        <div className="Categories">
            <div className="cat">
                <span className="label">Exercise</span>
                <img className='catImg' src={fitnessImg} alt="fitness" />
            </div>
            <div className="cat">
                <span className="label">Nutrition</span>
                <img className='catImg' src={foodImg} alt="food" />
            </div>
            <div className="cat">
                <span className="label">Food</span>
                <img className='catImg' src={restImg} alt="rest" />
            </div>
            <div className="cat">
                <span className="label">Planning</span>
                <img className='catImg' src={plannerImg} alt="planner" />
            </div>
        </div>
    );
}


export default Categories;