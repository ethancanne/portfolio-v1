import React from 'react'
import './Popup.scss'


const Popup = (props) => {
    return (
       <div className="popup-wrapper">
           <div className="popup-background"></div>
            <div className="popup">
                {props.children}
            </div>
       </div>
    )
}

export default Popup
