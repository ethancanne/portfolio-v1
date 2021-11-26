import React from 'react'
import './ProficiencyCard.scss'

const ProficiencyCard = (props) => {
    return (
        <div>
            <div style={{backgroundImage: `linear-gradient(90deg,  rgba(255, 255, 255, 0.899),rgba(250, 250, 250, 0.9)), url("${props.proficiency.backgroundImg}")`}} className="proficiency-card">
                <div className="proficiency-top">
                    <h1>{props.proficiency.title}</h1>
                </div>
                <div className="proficiency-details">
                    <p>{props.proficiency.description}</p>
                </div>
                <div className="proficiency-technologies">
                    <h3>Technologies:</h3>
                    {props.proficiency.technologies.map(t => (
                        <p className="technology"><em>{t}</em></p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProficiencyCard
