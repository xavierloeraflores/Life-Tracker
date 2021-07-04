import React from 'react'
import "./Excersise.css"
import Xcard from '../Xcard/Xcard'
const exercises = [
    {
        name: "Dank",
        duration:"30",
        intensity:"10",
        time:"30"
    },
    {
        name: "Dank",
        duration:"30",
        intensity:"10",
        time:"30"
    },
    {
        name: "Dank",
        duration:"30",
        intensity:"10",
        time:"30"
    },
    {
        name: "Dank",
        duration:"30",
        intensity:"10",
        time:"30"
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
                    {exercises.map((exercise)=> (
                        console.log(exercise.name)
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Excersise;
