import React from 'react'
import './Popup.scss'


const Popup = (props) => {
    return (
        <div className="popup-wrapper">
            <div className={"popup-background " + (props.isShowing ? "active" : "")}></div>
            <div className={"popup " + (props.isShowing ? "active" : "")}>
                {props.children}
            </div>
        </div>
    )
}

export default Popup
