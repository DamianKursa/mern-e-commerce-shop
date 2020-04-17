import React from 'react'
import { useState } from 'react'

const FiltersPriceRange = ({prices, handleFilters}) => {

  const [priceRange, setPriceRange] = useState(0)
  const handleChange = (event) =>{
      
    handleFilters(event.target.value)
    setPriceRange(event.target.value)
  }
  return prices.map((price,index) => (
    <div key={index}>
      <input 
        value={`${price._id}`}
        name={price} 
        onChange={handleChange} 
        type='radio' 
        className="mr-2 ml-4" />
      <label 
        htmlFor="" 
        className="form-check-label">{price.name}
      </label>
    </div>

  ))
}

export default FiltersPriceRange
