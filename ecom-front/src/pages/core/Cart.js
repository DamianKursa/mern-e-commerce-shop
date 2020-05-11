import React, { useRef, useState, useEffect } from "react"
import Layout from "../../layouts/Main"
import Card from "./Card"
import { getItemFromCart } from './cardHelper'


const Cart = (product) => {
  const [itemsInCart, setItemsInCart] = useState([])
  
  useEffect(() => {
    setItemsInCart(getItemFromCart());
  }, [])

  const showCartProducts = (itemsInCart) => {
    return (
        <div>
          {itemsInCart.map((product,index)=>{
            return(
              <div>
            <Card
              key={index}
              product={product}
              showAddToCartButton={false}
              showQuantityInput={true}
              removeFromCartButton={true}
              itemsInCart={itemsInCart}
                    />
              </div>
            )
          })}
        </div>
    );
};


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
      <div className="col-6">
        {itemsInCart.length > 0 ? showCartProducts(itemsInCart) : showMessage()}
      </div>
      </Layout>
    </div>
  )
  }
export default Cart

