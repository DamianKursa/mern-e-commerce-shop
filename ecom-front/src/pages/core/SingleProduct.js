import React, { useState, useEffect } from "react"
import Layout from "../../layouts/Main"
import Card from "./Card"
import { read } from "./apiCore"
import { getRelatedProducts } from './apiCore'

const SingleProduct = (props) => {

const [product, setProduct] = useState({});
const [error, setError] = useState(false);
const [relatedProducts, setRelatedProducts] = useState([])

const loadSingleProduct = (productId) =>{
    read(productId).then( data => {
      if(error){
        setError(data.error)
      }
      else{
        setProduct(data);
        getRelatedProducts(productId).then( data => {
          if(error){
            setError(data.error)
          }
          else{
            setRelatedProducts(data)
          }
      })
      }
    });
}

useEffect(

  () => {
    const productId = props.match.params.productId
    loadSingleProduct(productId);
},[props])


  return (
      <Layout
        title={product.name}
        description={product.description}
        className="container-fluid"
      >
        <div className="row">
          <div  className="col-8">
            <Card product={product} showViewProductButton={false}/>
          </div>
        </div>
        <h2 className="mb-5 mt-5">Related products</h2>
        <div className="row">
            {relatedProducts.map((product,index)=>(
              <div className="col-3">
                <Card product={product} key={index}/>
              </div>
            ))}
          </div>


      </Layout>

            

)}
export default SingleProduct



