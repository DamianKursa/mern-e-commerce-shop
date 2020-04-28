import React, { useState, useEffect } from "react"
import Layout from "../../layouts/Main"
import { getProducts } from "./apiCore"
import Card from "./Card"

const Home = () => {
  const [productBySell, setProductsBySell] = useState([])
  const [productByArrival, setProductsByArrival] = useState([])
  const [error, setError] = useState([])

  const loadProductBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error)
      } else {
        setProductsBySell(data)
      }
    })
  }
  const loadProductByArrival = () =>
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error)
      } else {
        setProductsByArrival(data)
      }
    })

  useEffect(() => {
    loadProductByArrival()
    loadProductBySell()
  }, [])

  return (
    <Layout
      title="Home Page"
      description="Node and React E-commerce Shop"
      className="container-fluid"
    >
      <h2 className="mb-4">Bestsellers</h2>
      <div className="row">
        {productBySell.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
      <h2 className="mb-4">Recent Products</h2>
      <div className="row">

        {productByArrival.map((product, index) => (
          <div className="col-4 mb-3">
            <Card key={index} product={product} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Home
