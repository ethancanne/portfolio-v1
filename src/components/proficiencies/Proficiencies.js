import React, { useState } from 'react'
import './Proficiences.scss'
import ProficiencyCard from './ProficiencyCard'

const Proficiencies = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const proficiences = [
        {
            title: "Front-end development",
            description: "lorem",
            technologies: ["hehher", "hhre"],
            backgroundImg: "background"
        },
        {
            title: "Back-end development",
            description: "lorem",
            technologies: ["hehher", "hhre"],
            backgroundImg: "background"
        },
        {
            title: "Othe-end development",
            description: "lorem",
            technologies: ["hehher", "hhre"],
            backgroundImg: "background"
        }
    ]

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2 ) :
        setCurrentSlide(currentSlide < proficiences.length - 1 ? currentSlide + 1 : 0)

    }
    return (
        <div className="proficiences">
            <div className="section-wrapper">
                <h1 className="title center">Proficiencies</h1>
                <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                    {proficiences.map(p=>(
                        <div className="container">
                            <ProficiencyCard proficiency={p}/>
                        </div>
                    ))}
                    </div>
            </div>
            <button className="arrow-right arrow" onClick={()=>handleClick("right")}> {"<"}</button>
            <button className="arrow-left arrow" onClick={()=>handleClick("left")}> {"<"}</button>
        </div>
    )
}

export default Proficiencies
