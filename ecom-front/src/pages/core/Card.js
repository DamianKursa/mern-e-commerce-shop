import React from "react"
import { Link } from "react-router-dom"
import ShowImage from "./ShowImage"
import moment from 'moment'
const Card = ({ product, showViewProductButton = true }) => {


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

const addToCartButton =() =>{
  return(
    <button className="btn btn-outline-secondary mt-2 mb-2">
      Add to card 
    </button>
  )
}
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
            {showViewButton(showViewProductButton)}
            {addToCartButton()}
        </div>
      </div>
  )
}

export default Card
