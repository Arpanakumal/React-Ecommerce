import React from 'react'
import "./bread.css"



const BreadCrums = (props) => {
    const { product } = props;

    return (
        <div className='breadCrums'>
            HOME /SHOP / <img src=""alt="" />{product.category} / {product.name}

        </div>
    )
}

export default BreadCrums
