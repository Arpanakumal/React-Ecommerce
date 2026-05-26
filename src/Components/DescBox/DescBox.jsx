import React from 'react'
import "./desc.css"

const DescBox = () => {
    return (
        <div className='descBox'>
            <div className="desc-nav">
                <div className="desc-navBox">
                    Description
                </div>
                <div className="desc-navBox fade">
                    Reviews (122)
                </div>

            </div>
            <div className="descBox-desc">
                <p>An e-commerce platform is a digital system that allows businesses and individuals to buy and sell products or services online. It provides a virtual storefront where users can browse items, view product details, compare prices, and make secure purchases without visiting a physical store.</p>
                <p>Modern e-commerce platforms typically include features such as product catalogs, shopping carts, user authentication, online payment integration, order tracking, and customer reviews. They are designed to make the shopping experience smooth, fast, and accessible from any device.</p>
            </div>



        </div>
    )
}

export default DescBox
