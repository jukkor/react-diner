import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import ProductList from './ProductList';

import './App.css';


function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/productlist" >Product List</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
      <footer className="footer">
        <p>&copy; 2023 Big Kebab. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App;