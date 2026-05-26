import React, { useContext } from 'react'
import "./product.css"
import star from "../Assets/star.png"
import starDull from "../Assets/starGrey.png"
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const { product } = props;

    const {addToCart} = useContext(ShopContext);



    return (
        <div className='productDisplay'>
            <div className="product-left">
                <div className="product-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>

            </div>
            <div className="product-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={starDull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-oldprice">
                        Rs.{product.old_price}
                    </div>
                    <div className="productDisplay-right-newprice">
                        Rs.{product.new_price}
                    </div>

                    <div className="productDisplay-right-Desc">
                        Elegant chiffon blouse with a lightweight and breathable feel, perfect for both casual outings and special occasions. Designed for comfort and effortless style.Soft chiffon top featuring a flowy silhouette and stylish fit that adds a graceful touch to your wardrobe. Easy to pair with jeans, skirts, or trousers.
                    </div>
                    <div className="productDisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productDisplay-right-size">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XS</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

                
                </div>


            </div>

        </div>
    )
}

export default ProductDisplay
