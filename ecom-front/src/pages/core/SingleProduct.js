import React, { useState, useEffect } from "react"
import Layout from "../../layouts/Main"
import Card from "./Card"
import { read } from "./apiCore"

const SingleProduct = (props) => {

const [product, setProduct] = useState({});
const [error, setError] = useState(false);

const loadSingleProduct = (productId) =>{
    read(productId).then( data => {
      if(error){
        setError(data.error)
      }
      else{
        setProduct(data);
      }
    });
}

useEffect(

  () => {
    const productId = props.match.params.productId
    loadSingleProduct(productId);
},[])


  return (
      <Layout
        title="Shop Page"
        description="Find your product"
        className="container-fluid"
      >
        <div>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <h2>{product.cateogry}</h2>
        {JSON.stringify(product)}
        </div>
      </Layout>

            

)}
export default SingleProduct