import React, {useState,useEffect} from 'react'
import Layout from '../../layouts/Main'
import Card from './Card'
import {getCategories} from '../../admin/apiAdmin'
import FiltersCheckbox from './FiltersCheckbox'
const ShopPage = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)
  
  const init = () =>{
    getCategories().then((data)=>{
      if(data.error){
        setError(data.error)
      }else{
        setCategories(data)
      }
    })
  }

  useEffect(
    
    () =>{

      init()

    },[]
  )

  const handleFilters = (filters, filterBy) =>{
    console.log(filters, filterBy)
  }

  return (
    <div>
      <Layout title="Shop Page" description="Find your product" className= 'container-fluid'>
        <div className="row">
          <div className="col-4">
            <ul>
              <FiltersCheckbox handleFilters={ filters => handleFilters(filters,'category')} categories={categories}/>
            </ul>

          </div>
          <div className="col-8">
            right sidebar
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ShopPage
