import React from 'react'
import './core.scss'

const Highlight = (props) => {
    return (
        <div className="highlight">
            {props.children}
        </div>
    )
}

export default Highlight
