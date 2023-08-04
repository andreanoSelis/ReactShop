import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import ProductCart from './ProductCart'
function Checkout(){
    const[{cart}] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout_left">
                {
                    cart.length === 0 ? (
                        <div>
                            <h2 className="checkout_title">Your Shopping Cart is Empty.</h2>
                            <p>You've No Item(s) in Your Cart.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="shopping_cart_title">Item(s) in the Cart</h2>
                            {
                                cart.map(item => (
                                    <ProductCart
                                        id = {item.id}
                                        title = {item.title}
                                        image = {item.image}
                                        price = {item.price}
                                        rating = {item.rating} 
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {
                cart.length > 0 && (
                    <div className="checkout_right">
                        <Subtotal />
                    </div>
                )
            }
        </div>
    )
}
export default Checkout