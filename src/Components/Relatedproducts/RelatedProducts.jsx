import React from 'react'
import "./related.css"
import data_product from '../Assets/product'
import Item from '../item/Item'

const RelatedProducts = (props) => {

    const relatedItems = data_product
        .slice(0, 4);

    return (
        <div className='relatedProducts'>
            <h1>Related Products</h1>
            <hr />

            <div className="related-items">
                {relatedItems.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>

        </div>
    )
}

export default RelatedProducts