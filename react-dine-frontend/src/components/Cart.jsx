import CartItem from "./CartItem"

import './Cart.css'
import { Link } from "react-router-dom";


const Cart = (props) => {

  let total = 0;
  props.cart.map((item) => (
    total += item.price * item.quantity
  ));

  return (
    <div className="cartContainer">
      {total !== 0
        ?
        <>
          {props.cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              changeQuantity={props.changeQuantity}
            />
          ))}
          <div className="cartTotalAndCheckout">
            <p>Total: {total.toFixed(2)}€</p>
            {props.atCheckout
              ? <></>
              : <Link to={'/checkout'}>
                <button onClick={() => props.setIsCartActive(false)}>
                  Checkout
                </button>
              </Link>
            }
          </div>
        </>
        : <p>No items in cart. Add some!</p>
      }
    </div>
  )
}

export default Cart