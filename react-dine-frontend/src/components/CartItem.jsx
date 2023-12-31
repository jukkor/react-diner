import { useState } from 'react'

import './CartItem.css'


const CartItem = (props) => {

  const [quantity, setQuantity] = useState(props.quantity);

  const handleButtonClick = (amount) => {
    setQuantity(quantity + Number(amount))
    props.changeQuantity(quantity + amount, props.id);
  }

  return (
    <div className="cartItem">
      <img src={props.image} className='cartImage' />
      <h4 className='cartItemName'>{props.name}</h4>
      <p>{props.price}€</p>

      <div className='quantity'>
        <p>Quantity:</p>
        <input
          type='textfield'
          className='itemAmount'
          value={quantity}
          onChange={
            (e) => {
              setQuantity(Number(e.target.value))
              props.changeQuantity(Number(e.target.value), props.id);
            }} />
      </div>

      <button
        onClick={() => handleButtonClick(-1)}
      >-</button>

      <button
        onClick={() => handleButtonClick(1)}
      >+</button>
    </div>
  )
}

export default CartItem