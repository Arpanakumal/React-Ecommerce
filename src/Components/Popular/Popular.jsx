import React from 'react'
import './popular.css';
import data_product from '../Assets/product';
import Item from '../item/Item';


const Popular = () => {
    return (
        <div className='popular'>

            <h1>POPULAR ITEMS</h1>
            <hr />
            <div className="popular-item">
                {data_product.slice(0, 4).map((item) => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Popular
