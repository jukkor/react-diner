
export function PriceAndAddToCart({ props }) {
  return <div className='priceAndCart'>
    <h4>{props.price}€</h4>
    <button onClick={() => props.addToCart(props)}>Add to cart</button>
  </div>;
}
