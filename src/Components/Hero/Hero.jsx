import React from 'react'
import './Hero.css';

import arrow from '../Assets/arrow.png';
import hero from '../Assets/hero.jpg';



const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>   NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>New</p>
                    </div>
                    <p>Collections</p>

                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow} alt="" />
                </div>


            </div>

            <div className="hero-right">
                <img src={hero} alt="" />


            </div>

        </div>
    )
}

export default Hero
