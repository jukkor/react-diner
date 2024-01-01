import { useEffect, useState } from 'react'
import Cart from '../components/Cart'

import './Checkout.css'


const Checkout = (props) => {

  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    nameAsOnCard: "",
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      props.clearCart();
    }
  }, [formErrors])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {}

    const regexName = /[a-zA-Z]/;

    const regexAddress = /[A-Za-z0-9'.\-\s,]/;
    const regexCity = /^[a-zA-Z\s'-]+$/;
    const regexZipCode = /\b\d{5}(?:-\d{4})?\b/;

    const regexCVV = /[0-9]/;
    const regexExpiryDate = /^(0[1-9]|1[0-2])\/(20\d{2}|21[0-9]{2}|22[0-5][0-9])$/;
    const regexNameAsOnCard = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/;


    if (!values.firstName) {
      errors.firstName = "Please enter your first name"
    } else if (!regexName.test(values.firstName)) {
      errors.firstName = "Please enter a first name without special characters"
    }
    if (!values.lastName) {
      errors.lastName = "Please enter your last name"
    }

    if (!values.address) {
      errors.address = "Please enter your address"
    } else if (!regexAddress.test(values.address)) {
      errors.address = "Please enter a valid address"
    }
    if (!values.city) {
      errors.city = "Please enter your city"
    } else if (!regexCity.test(values.city)) {
      errors.city = "Please enter a valid city name"
    }
    if (!values.zipCode) {
      errors.zipCode = "Please enter your zip code"
    } else if (!regexZipCode.test(values.zipCode)) {
      errors.zipCode = "Please enter a valid zip code"
    }

    if (!values.cardNumber) {
      errors.cardNumber = "Please enter a card number"
    } else if (values.cardNumber.length < 16 || values.cardNumber.length > 16) {
      errors.cardNumber = "Please enter a valid card number"
    }
    if (!values.cvv) {
      errors.cvv = "Please enter the CVV"
    } else if (values.cvv.length < 3 || values.cvv.length > 3 || !regexCVV.test(values.cvv)) {
      errors.cvv = "Please enter a valid CVV"
    }

    if (!values.expiryDate) {
      errors.expiryDate = "Please enter a expiry date"
    } else if (!regexExpiryDate.test(values.expiryDate)) {
      errors.expiryDate = "Please enter a valid expiry date"
    }
    if (!values.nameAsOnCard) {
      errors.nameAsOnCard = "Please enter your name as it is written on your card"
    } else if (!regexNameAsOnCard.test(values.nameAsOnCard)) {
      errors.nameAsOnCard = "Please enter your full name as written on your card"
    }

    return errors;
  }



  return (
    <div className='checkoutContainer'>
      <div className="checkoutOrderPersonalInfoForm">
        {Object.keys(formErrors).length === 0 && isSubmit
          ? <div><h3>✔️ Order Submitted!</h3></div>
          :
          <form>
            <div>
              <div>
                <h3>Name</h3>
              </div>
              {formErrors.firstName && <p>{formErrors.firstName}</p>}
              {formErrors.lastName && <p>{formErrors.lastName}</p>}
              <div className='checkoutInputField'>
                <input
                  type='textinput'
                  name="firstName"
                  placeholder={"First Name"}
                  value={formValues.firstName}
                  onChange={handleChange}
                />
                <input
                  type='textinput'
                  name="lastName"
                  placeholder={"Last Name"}
                  value={formValues.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div>
                <h3>Address</h3>
              </div>
              {formErrors.address && <p>{formErrors.address}</p>}
              {formErrors.city && <p>{formErrors.city}</p>}
              {formErrors.zipCode && <p>{formErrors.zipCode}</p>}
              <div>
                <div className='checkoutInputField'>
                  <input
                    type='textinput'
                    name="address"
                    placeholder={"Address"}
                    value={formValues.address}
                    onChange={handleChange}
                  />
                </div>
                <div className='checkoutInputField'>
                  <input
                    type='textinput'
                    name="city"
                    placeholder={"City"}
                    value={formValues.city}
                    onChange={handleChange}
                  />
                  <input
                    type='textinput'
                    name="zipCode"
                    placeholder={"Zip Code"}
                    value={formValues.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3>Payment Details</h3>
              </div>
              <div>
                {formErrors.cardNumber && <p>{formErrors.cardNumber}</p>}
                {formErrors.cvv && <p>{formErrors.cvv}</p>}
                {formErrors.expiryDate && <p>{formErrors.expiryDate}</p>}
                {formErrors.nameAsOnCard && <p>{formErrors.nameAsOnCard}</p>}
                <div className='checkoutInputField'>
                  <input
                    type='textinput'
                    name="cardNumber"
                    placeholder={"Card Number"}
                    value={formValues.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className='checkoutInputField'>
                  <input
                    type='textinput'
                    name="cvv"
                    placeholder={"CVV"}
                    value={formValues.cvv}
                    onChange={handleChange}
                  />
                  <input
                    type='textinput'
                    name="expiryDate"
                    placeholder={"Expiry Date"}
                    value={formValues.expiryDate}
                    onChange={handleChange}
                  />
                </div>
                <div className='checkoutInputField'>
                  <input
                    type='textinput'
                    name="nameAsOnCard"
                    placeholder={"Full Name On Card"}
                    value={formValues.nameAsOnCard}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className='checkoutSubmitButtonContainer'>
              <button className='checkoutSubmitButton' onClick={handleSubmit}>Finalize Order</button>
            </div>

          </form>
        }
      </div>
      {Object.keys(formErrors).length === 0 && isSubmit
        ?
        <></>
        :
        <Cart
          cart={props.cart}
          changeQuantity={props.changeQuantity}
          atCheckout={true}
        />
      }
    </div>
  )
}

export default Checkout