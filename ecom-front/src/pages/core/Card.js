import React,{ useState } from "react"
import { Link } from "react-router-dom"
import ShowImage from "./ShowImage"
import moment, { updateLocale } from 'moment'
import { addItemToCart,updateQuantity } from './cardHelper'
const Card = ({ 
  product, 
  showViewProductButton = true, 
  showAddToCartButton = true,
  showQuantityInput = false

}) => {
  const [ addedToCart , setAddedToCart ] = useState(false)
  const [ count , setCount ] = useState(product.count)
const showViewButton = (showViewProductButton) => {
  return(
    showViewProductButton && (
      <Link to={`/product/${product._id}`}>
        <button className="btn btn-outline-primary mt-2 mb-2">
          View Product
        </button>
      </Link>

     )
  )}
const showStock = () =>{
  return (product.quantity > 0  ? 
  <span class="badge badge-success">In stock </span>
  : 
  <span class="badge badge-danger">Out of stock </span>
  );
}
const addToCart = () => {
  addItemToCart(product, () => {
    setAddedToCart(true)
  })

}
const handleChange = (productId) => event =>{
    setCount(event.target.value < 1 ? 1 : event.target.value )
    if(event.target.value >= 1){
      updateQuantity(productId, event.target.value)
    }
} 
const showQuantity = (showQuantityInput) => (
  showQuantityInput &&( 
    <div>
      <label>Quantity :</label>
      <input value={count} onChange={handleChange(product._id)} type="number" id="tentacles" name="tentacles"
       min="1" max="100"/>
    </div>

  )
)
const addToCartButton = (showAddToCartButton) =>(
  
  showAddToCartButton && (
    <button onClick={ addToCart }className="btn btn-outline-secondary mt-2 mb-2">
      {addedToCart ? 'Added': 'Add to cart'}
    </button>
  )

)

  return (

      <div className="card">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <ShowImage item={product} url="product" />
          <p className="black-9">{product.description}</p>
          <p className="black-9">${product.price}</p>
          <p className="9">
              Category : {product.category && product.category.name}
          </p>
          
          <p>
          
              Added : {moment(product.createdAt).fromNow()}
          </p>
          <p>
            {showStock()}
          </p>
          
            {showViewButton(showViewProductButton)}
            {addToCartButton(showAddToCartButton)}
            {showQuantity(showQuantityInput)}
            
        </div>
      </div>
  )
}

export default Card
