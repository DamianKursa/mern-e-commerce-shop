import React, { useState, useEffect } from "react"
import Layout from "../../layouts/Main"
import Card from "./Card"
import { getItemFromCart } from './cardHelper'

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useState([])

  useEffect(() => {
   setItemsInCart(getItemFromCart())
  }, [])

  const showCartProducts = () =>{
    return(
      itemsInCart.map((product,index)=>(
          <Card showQuantityInput={true} showAddToCartButton = {false} product={product} key={index}/>
      ))
    )
  }
  const showMessage = () =>{
    return <h2>There is {itemsInCart.length} products in your cart.</h2>
  }
  return (
    <div>
      <Layout
        title="Shop Page"
        description="Find your product"
        className="container-fluid"
      >
        {itemsInCart.length > 1 ? showCartProducts() :showMessage() }
      </Layout>
    </div>
  )
}

export default Cart
