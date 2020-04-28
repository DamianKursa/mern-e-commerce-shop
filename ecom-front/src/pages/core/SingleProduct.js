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
        title={product.name}
        description={product.description}
        className="container-fluid"
      >
        <div className="row">
          <Card product={product} showViewProductButton={false}/>
        </div>
      </Layout>

            

)}
export default SingleProduct



