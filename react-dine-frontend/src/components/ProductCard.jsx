import './ProductCard.css'

const ProductCard = (props) => {

  return (
    <>
      <div className='productCard'>
        <h3>{props.name}</h3>
        <img src={"http://localhost:5000/" + props.image} />
        <div className='priceAndCart'>
          <h4>{props.price}€</h4>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard;