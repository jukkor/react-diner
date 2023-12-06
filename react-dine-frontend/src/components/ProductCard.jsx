import './ProductCard.css'

const ProductCard = (props) => {

  return (
    <>
      <div className='productCard' onClick={() => props.onCardClick(props)}>
        <h3>{props.name}</h3>
        <img src={props.image} />
        <div className='priceAndCart' onClick={(e) => e.stopPropagation()}>
          {/* stopPropagation stops modal from opening when clicking 'add to cart' */}
          <h4>{props.price}€</h4>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard;