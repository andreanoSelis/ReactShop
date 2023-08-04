import React from 'react'
import CurrencyFormat from 'react-currency-format'
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';
function Subtotal(){
    const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);
    const [{cart}, dispatch] = useStateValue();
    return(
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                        <p>
                            Total({cart.length} item(s)) : <strong>{value}</strong>
                        </p>
                    )
                }
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <Button variant="contained" color="primary">Proceed to Checkout</Button>
        </div>
    )
}
export default Subtotal