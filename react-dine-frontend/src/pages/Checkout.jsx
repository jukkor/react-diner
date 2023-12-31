import Cart from '../components/Cart'

import './Checkout.css'


const Checkout = (props) => {
  return (
    <div className='checkoutContainer'>
      <div className="checkoutOrderPersonalInfoForm">
        <div>
          <div>
            <h3>Name</h3>
          </div>
          <div className='checkoutInputField'>
            <input type='textinput' placeholder={"First Name"} />
            <input type='textinput' placeholder={"Last Name"} />
          </div>
        </div>

        <div>
          <div>
            <h3>Address</h3>
          </div>
          <div>
            <div className='checkoutInputField'>
              <input type='textinput' placeholder={"Address"} />
            </div>
            <div className='checkoutInputField'>
              <input type='textinput' placeholder={"City"} />
              <input type='textinput' placeholder={"Zip Code"} />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Payment Details</h3>
          </div>
          <div>
            <div className='checkoutInputField'>
              <input type='textinput' placeholder={"Card Number"} />
            </div>
            <div className='checkoutInputField'>
              <input type='textinput' placeholder={"CVV"} />
              <input type='textinput' placeholder={"Expiry Date"} />
            </div>
            <div className='checkoutInputField'>
              <input type='textinput' placeholder={"Full Name On Card"} />
            </div>
          </div>
        </div>

        <div className='checkoutSubmitButtonContainer'>
          <button className='checkoutSubmitButton'>Finalize Order</button>
        </div>
      </div>
      <Cart
        cart={props.cart}
        changeQuantity={props.changeQuantity}
        atCheckout={true}
      />
    </div>
  )
}

export default Checkout