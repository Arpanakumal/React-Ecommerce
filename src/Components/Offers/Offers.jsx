import React from 'react'
import './offer.css';
import p18 from '../Assets/18.jpg';

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offer-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLING PRODUCTS</p>
                <button>Check Now</button>

            </div>
            <div className="offer-right">
                <img src={p18} alt="" />

            </div>

        </div>
    )
}

export default Offers
