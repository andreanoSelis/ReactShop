import React from 'react'
import './ProductCart.css'
import { useStateValue } from './StateProvider'
import Button from '@material-ui/core/Button';
function ProductCart({id, title, image, price, rating}){
    const [{cart}, dispatch] = useStateValue();
    const removeItems = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    return(
        <div className="product_cart">
            <img className="product_cart_image" src={image}  alt=""/>
            <div className="product_cart_info">
                <p className="product_cart_title">{title}</p>
                <p className="product_cart_price">₹{price}</p>
                <div className="product_cart_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <span>*</span>
                        ))
                    }
                </div>
                <Button onClick={removeItems} color="secondary">Remove From Cart</Button>
            </div>
        </div>
    )
}
export default ProductCart