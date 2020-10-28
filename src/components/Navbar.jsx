import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import logo from '../assets/logo/foodshala.png';
const Navbar = () => {
    const totalQty = useSelector(state => state.cart.totalQty)
    return(
        <nav>
            <ul className="left">
                <li><Link to="/foodapp-redux"><img src={logo} alt="logo" /></Link></li>
            </ul>
            <ul className="right">
                <li ><Link to="/foodapp-redux/cart"><span className="shoppingCart dollor"><i className="fas fa-cart-plus"></i></span><span className="shoppingCartTotal">{totalQty}</span></Link></li>
            </ul>
        </nav>
    );

}

export default Navbar;