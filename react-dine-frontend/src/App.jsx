import { Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Badge from './components/Badge'

import './App.css';
import { useState, useEffect } from "react";
import Cart from "./components/Cart";


function App() {

  const [cart, setCart] = useState(() => {
    const cartInLocalStorage = JSON.parse(localStorage.getItem('cart'));
    return cartInLocalStorage ? cartInLocalStorage : [];
  });
  const [isCartActive, setIsCartActive] = useState(false);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (itemToBeAdded) => {
    const newItemInCart = cart.find((itemAlreadyInCart => itemAlreadyInCart.id === itemToBeAdded.id))

    if (!newItemInCart) {
      const newItem = {
        id: itemToBeAdded.id,
        name: itemToBeAdded.name,
        image: itemToBeAdded.image,
        price: itemToBeAdded.price,
        quantity: 1,
      }
      setCart([...cart, newItem]);

    } else {
      setCart(
        cart.map(
          (itemAlreadyInCart) =>
            itemAlreadyInCart.id === itemToBeAdded.id
              ? { ...itemAlreadyInCart, quantity: itemAlreadyInCart.quantity + 1 }
              : itemAlreadyInCart
        ));
    }
  }

  const changeQuantity = (amount, idOfItemToBeChanged) => {
    if (amount === 0) {
      const updatedCart = cart.filter((itemAlreadyInCart) => itemAlreadyInCart.id !== idOfItemToBeChanged);
      setCart(updatedCart);
    } else {
      setCart((prevCart) =>
        prevCart.map(
          (itemAlreadyInCart) =>
            itemAlreadyInCart.id === idOfItemToBeChanged
              ? { ...itemAlreadyInCart, quantity: amount }
              : itemAlreadyInCart
        )
      );
    }
  };

  return (
    <>
      <div className="appContainer">
        <nav>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/productlist" >Product List</Link></li>
            {cart.length == 0
              ? <></>
              : <Badge value={cart.length}
              />}
            <li className="cart"
              onClick={
                () => setIsCartActive(!isCartActive)
              }>
              <a>🛒Cart</a>
            </li>
          </ul>
        </nav>
        {isCartActive && <Cart cart={cart} changeQuantity={changeQuantity} />}
        <div className="contentWindow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlist"
              element={
                <ProductList
                  addToCart={addToCart} />
              }
            />
          </Routes>
        </div>
        <footer className="footer">
          <p>&copy; 2023 Big Kebab. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App;