import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Layout from "../layouts/Main"
import {isAuthenticated} from '../auth/index'
import {createProduct} from './apiAdmin'


const AddProduct = () =>{
  const { user , token } = isAuthenticated()
  const { values, setValues} = useState({
    name:'',
    description:'',
    price:'',
    category:'',
    shipping:'',
    quantity:'',
    photo:'',
    loading:false,
    error:'',
    createProduct:'',
    redirectToProfile:false,
    formData:'',
  })
  const {
    name,
    description,
    price,
    category,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createProduct,
    redirectToProfile,
    formData,
  } = values
  return (
    <Layout
      title="Add a new product"
      description={`${user.name}, are you ready to create new product?`}
      className="container col-md-8 offset-md-2"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">

        </div>
      </div>
    </Layout>
  )
}

export default AddProduct