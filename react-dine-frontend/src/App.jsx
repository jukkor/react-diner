import { Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import ProductList from './pages/ProductList';

import './App.css';


function App() {

  return (
    <>
      <div className="appContainer">
        <nav>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/productlist" >Product List</Link></li>
            <li className="cart"><a>🛒Cart</a></li>
          </ul>
        </nav>
        <div className="contentWindow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlist" element={<ProductList />} />
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