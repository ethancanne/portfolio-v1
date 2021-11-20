import React from 'react'
import Popup from './popup'
import './PortfolioPopup.scss'

const PortfoiloItem = ({item, setActiveItem}) => {
    return (
        <Popup>
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
                </div>
            </div>
        </Popup>
    )
}

export default PortfoiloItem
