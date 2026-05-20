import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.jpg';
import {Link} from 'react-router-dom';



const Navbar = () => {

    const [menu,setMenu] = useState("shop")

    return (


        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                
            </div>

            <ul className="nav-menu">
                    <li onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:'none'}}to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("tops")}}><Link style={{textDecoration:'none'}} to='/tops'>Tops</Link> {menu==="tops"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("skirts")}}><Link style={{textDecoration:'none'}} to='/skirts'>Skirts</Link> {menu==="skirts"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("hats")}}><Link style={{textDecoration:'none'}}  to='/hats'>Hats</Link> {menu==="hats"?<hr/>:<></>}</li>
                 <li onClick={()=>{setMenu("jackets")}}><Link style={{textDecoration:'none'}}  to='/jackets'>Jackets</Link> {menu==="jackets"?<hr/>:<></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} alt="" /></Link>
                
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </div>
    )
}

export default Navbar
