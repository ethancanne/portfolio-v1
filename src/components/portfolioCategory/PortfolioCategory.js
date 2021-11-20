import './PortfolioCategory.scss'
import React from 'react'

const PortfolioCategory = ({id, title, active, setActiveCategory}) => {
    return (
            <li className={(active ? "category active" : "category")} onClick={()=>setActiveCategory(id)}>{title}</li>
    )

}

export default PortfolioCategory
