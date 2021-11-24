import React from 'react'
import './ProficiencyCard.scss'

const ProficiencyCard = (props) => {
    return (
        <div className="proficiency-card" style={{backgroundImage: `linear-gradient(90deg,  rgba(255, 255, 255, 0.899),rgb(250, 250, 250),), url("${props.backgroundImg}")`}}>
            <div className="proficiency-top">
                <h1>{props.proficiency.title}</h1>
            </div>
            <div className="proficiency-details">
                <p>{props.proficiency.description}</p>
            </div>
            <div className="proficiency-technologies">
                <h3>Technologies:</h3>
                {props.proficiency.technologies.map(img => (
                    <img className="technology-img" src={img} />
                ))}
            </div>
        </div>
    )
}

export default ProficiencyCard
