import React, { useState, useEffect } from "react"
import Layout from "../../layouts/Main"
import Card from "./Card"

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useState([])
  
  const  getItemsFromCart = () =>{
    getItemFromCart().then(data =>(
      setItemsInCart(data))
    }
  }
  return (
    <div>
      <Layout
        title="Shop Page"
        description="Find your product"
        className="container-fluid"
      >
      </Layout>
    </div>
  )
}

export default Cart
