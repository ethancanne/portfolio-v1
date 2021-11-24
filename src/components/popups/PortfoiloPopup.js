import React from 'react'
import Popup from './Popup'
import './PortfolioPopup.scss'

const PortfoiloItem = ({item, setActiveItem, isShowing}) => {
    return (
        <Popup isShowing={isShowing}>
            <div className="bar">
                <h1>{item.title}</h1>
                <div className="close-button" onClick={()=>setActiveItem("")}>X</div>
            </div>
            <div className="portfolio-popup-wrapper">
                <div className="portfolio-info-wrapper">
                    <div className="left">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="right">
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className="bottom-portfolio-wrapper">
                    <a href={item.link}>Check it out</a>
                    <h3>{item.dateCreated}</h3>
                </div>
            </div>
        </Popup>
    )
}

export default PortfoiloItem
