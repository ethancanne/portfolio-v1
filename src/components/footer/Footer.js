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
                <a href="https://www.github.com/ethancanne/">
                    <GitHub/>
                </a>
                <a href="https://www.linkedin.com/in/ethan-cannelongo/">
                    <LinkedIn/>
                </a>
            </div>
            <a href="">Privacy Policy</a>
        </div>
    )
}

export default Footer
