import React from 'react'
import './Product.css'
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';
function Product({id, title, price, rating, image}) {
    const [{cart}, dispatch] = useStateValue()
    console.log('cart content', cart)
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <strong>₹</strong>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <Button size="small" color="secondary">Buy Now</Button>
            <Button size="small" color="secondary" onClick={addToCart}>Add to Cart</Button>
        </div>
    )
}
export default Product