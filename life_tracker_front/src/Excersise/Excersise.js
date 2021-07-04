import React from 'react'
import "./Excersise.css"
import Xcard from '../Xcard/Xcard'
const exercises = [
    {
        name: "Running",
        duration:"30",
        intensity:"7",
        time:"Today @16:30"
    },
    {
        name: "Jogging",
        duration:"45",
        intensity:"4",
        time:"Yesterday @ 11:30"
    },
    {
        name: "Weightlifting",
        duration:"20",
        intensity:"8",
        time:"Yesterday @11:00"
    },
    {
        name: "Running",
        duration:"30",
        intensity:"7",
        time:"July 1 @16:30"
    }
]
function Excersise() {
    return (
        <div className="Exercise">
            <h1>Exercises</h1>
            <div id="ePage">
                <button>Add Excersise</button>
                <div id="exercises">
                    {exercises.map((exercise)=> (
                        <Xcard name={exercise.name} duration={exercise.duration} intensity={exercise.intensity} time={exercise.time}/>
                    ))}
                    {/* {exercises.map((exercise)=> (
                        console.log(exercise.name)
                    ))} */}
                </div>

            </div>
        </div>
    )
}

export default Excersise;
