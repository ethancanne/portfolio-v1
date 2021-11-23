import React from 'react'
import './Footer.scss'
import {LinkedIn, GitHub} from '@material-ui/icons';

const Footer = () => {
    return (
        <div className="footer">
            <h1>
                Connect
            </h1>
            <hr />
            <div className="connects">
                <LinkedIn/>
                <GitHub/>
            </div>
        </div>
    )
}

export default Footer
