import Cart from '../components/Cart'

import './Checkout.css'


const Checkout = (props) => {
  return (
    <div className='checkoutContainer'>
      <div className="checkoutOrderPersonalInfoForm">
        <div>
          <div>
            <h2>Name</h2>
          </div>
          <div className='checkoutInputField'>
            <input type='textinput' placeholder={"First Name"} />
            <input type='textinput' placeholder={"Last Name"} />
          </div>
        </div>

        <div>
          <div>
            <h2>Address</h2>
          </div>
          <div className='checkoutInputField'>
            <input type='textinput' placeholder={"Address"} />
            <input type='textinput' placeholder={"City"} />
            <input type='textinput' placeholder={"Zip Code"} />
          </div>
        </div>

        <div>
          <div>
            <h2>Payment Details</h2>
          </div>
          <div className='checkoutInputField'>
            <input type='textinput' placeholder={"Card Number"} />
            <input type='textinput' placeholder={"CVV"} />
            <input type='textinput' placeholder={"Expiry Date"} />
            <input type='textinput' placeholder={"Full Name On Card"} />
          </div>
        </div>
        <button>Submit</button>
      </div>
      <div className="cartContents">
        <Cart
          cart={props.cart}
          changeQuantity={props.changeQuantity}
          atCheckout={true}
        />
      </div>
    </div>
  )
}

export default Checkout