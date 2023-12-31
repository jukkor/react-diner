import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";

import './ProductList.css'


const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);


  // Fetch stuff
  const FetchProducts = async () => {
    let productList = await fetch('http://localhost:5000/api/dishes');
    let result = await productList.json();
    setProducts(result);
  }

  useEffect(() => {
    FetchProducts();
  }, []);


  // Modal stuff
  const onCardClick = (props) => {
    setSelectedCard(props);
  }

  const closeModal = () => {
    setSelectedCard(null);
  }


  return (
    <>
      <div className="productListPage">
        <h1>PRODUCT LIST</h1>
        <div className="productList">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={"http://localhost:5000/" + item.image}
              onCardClick={onCardClick}
              addToCart={addToCart}
            />
          ))}
        </div>
        {selectedCard && <ProductDetailsModal props={selectedCard} onClose={closeModal} />}
      </div>
    </>
  )
}

export default ProductList;