import React,{useContext} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/action/action';
const ProductCards = (props) =>{
 const dispatch = useDispatch();
    return(
        <div className="product" pid={props.id}>
            <div className="product-image">
              <img src={props.image} alt={props.name} />
            </div>
            <div className="product-details">
                <div className="product-name">
                    {props.name}
                </div>
                <div className="product-price">
                    ${props.price.toFixed(2)}
                </div>
            </div>
            {/****Hot and Cold recipe ********/
                props.temperatue==="hot"?<div className="hotIcon">Hot</div>:<div className="coldIcon">Chilled</div>}
            {/*********Veg or NonVeg Icon**********/
                props.vegNonveg==="veg"?<div className="vegIcon" title="veg"></div>:<div className="nonVegIcon" title="non veg"></div>}
            <div className="addToCart" onClick={()=>dispatch(addToCart({id:props.id,productDetails:props.productDetails}))} >
                Add To Cart
            </div>
        </div>
    )
}

export default ProductCards;