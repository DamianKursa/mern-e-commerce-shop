import React, { useState, useEffect } from "react"
import Card from "./Card"
import { getCategories } from "../../admin/apiAdmin"

const SearchBar = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  })
  const { categories, category, search, results, searched } = data

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        console.log(data)
        setData({ ...data, categories: data })
      }
    })
  }

  useEffect(() => {
    loadCategories()
  }, [])

  const handleChange = () =>{
    //
  }
  const searchSubmit = () =>{
    //
  }
  const searchForm = () => (

    <form onSubmit={searchSubmit}>
      <span className="input-group-text">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <select className="btn mr-2" onChange={handleChange('category')}>
             <option value="All">Pick Category</option> 
             {categories.map((category,index) => (
                <option key={index} value={category._id}>{category.name}</option>
             ))}
            </select>
          </div>
          <input 
            type="text" 
            className="form-control" 
            onChange={handleChange('search')} 
            placeholder="Search by name"
          />
          <div className="btn input-group-append">
            <button className="input-group-text">Search</button>
          </div>
        </div>
      </span>

    </form>

  )

  return (
    <>
      <div className="row">
        <div className="container">
          {searchForm()}
        </div>
      </div>
    </>
  )
}

export default SearchBar
