import React from 'react'
import './footer.css'
import logo from '../Assets/logo.png'
import insta from '../Assets/insta.webp'
import facebook from '../Assets/facebook.webp'
import whatsapp from '../Assets/whatsapp.webp'
import pinterest from '../Assets/pinterest.webp'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt="" />


            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>About</li>
                <li>Contacts</li>

            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={insta} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={facebook} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp} alt="" />

                </div>
                <div className="footer-icons-container">
                    <img src={pinterest} alt="" />

                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2026 - All Right Reserved</p>
            </div>


        </div>
    )
}

export default Footer
