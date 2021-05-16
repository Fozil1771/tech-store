import React from 'react'
import NavTop from './NavTop.style'
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const NavHead = (props) => {
    return (

        <NavTop>
            <div className="info-time">
                <span>Mon - Thu: </span><span className="working-time">09:00 AM - 05:30 PM</span>
            </div>
            <div>
                <h6 className="info-address"><span>Visit our showroom in 1234 Street</span><span> Adress City Address, 1234 <Link to="/contact-us">Contact Us</Link></span></h6>
            </div>
            <div className="contact-box">
                <h6 className="info-phone">Call Us: (00) 1234 5678</h6>
                <div className="info-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
        </NavTop>

    )
}

export default NavHead;