import React, { createContext, useState } from 'react'
import data_product from '../Components/Assets/product'


export const ShopContext = createContext(null)



const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < data_product.length; index++) {
        cart[data_product[index].id] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setcartItems] = useState(getDefaultCart());


    const addToCart = (itemId) => {
        setcartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));

    };
            console.log(cartItems);

    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }



    const contextValue = { data_product, cartItems, addToCart, removeFromCart };




    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider