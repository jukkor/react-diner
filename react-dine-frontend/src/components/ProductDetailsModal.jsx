import './ProductDetailsModal.css'


const ProductDetailsModal = ({ props, onClose }) => {

  return (
    <>
      <div className='productDetailsModal' onClick={() => onClose()}>
        <div className='productDetailsModalContent' onClick={(e) => e.stopPropagation()}>
          {/* stopPropagation stops the modal from closing when clicked inside the content. idk why tho */}

          <div className='productDetailsModalForehead'>
            <h3>{props.name}</h3>
            <button className='productDetailsModalCloseButton' onClick={onClose}>X</button>
          </div>

          <img src={props.image} />
          <p className='productDetailsModalProductDescription'>{props.description}</p>

          <div className='productDetailsModalPriceAndCart'>
            <h4>{props.price}€</h4>
            <button onClick={
              () => {
                const item = {
                  id: props.id,
                  name: props.name,
                  price: props.price,
                  image: props.image
                }
                props.addToCart(item)
              }
            }>Add to cart</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductDetailsModal;