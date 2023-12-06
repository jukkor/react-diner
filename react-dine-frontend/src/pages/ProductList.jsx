import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const FetchProducts = async () => {
    let productList = await fetch('http://localhost:5000/api/dishes');
    let result = await productList.json();
    setProducts(result);
  }

  useEffect(() => {
    FetchProducts();
  }, []);


  return (
    <>
      <div className="productPage">
        <h1>PRODUCT LIST</h1>
        <div className="productList">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={"http://localhost:5000/" + item.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList;