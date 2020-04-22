import React from "react"
import { useState } from "react"
//NIE ROZUMIEM JAK TO DZIAŁA W PEŁNI
const FiltersCheckbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([])
  //Higher Order Component Function - component zwraca funckcje
  const handleToggle = (category) => () => {
    const currentCategoryId = checked.indexOf(category)
    const newCheckedCategoryId = [...checked]
    // return the first index or -1 - jezeli zwraca -1 to znaczy ze nie ma tej kategori w state
    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(category)
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1)
    }

    setChecked(newCheckedCategoryId)
    handleFilters(newCheckedCategoryId)
  }

  return categories.map((category, index) => (
    <li key={index} className="list-unstyled">
      <input
        value={checked.indexOf(category._id === -1)}
        onChange={handleToggle(category._id)}
        type="checkbox"
        className="form-check-input"
      />
      <label htmlFor="" className="form-check-label">
        {category.name}
      </label>
    </li>
  ))
}

export default FiltersCheckbox
