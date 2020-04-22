import { API } from "../config"

export const createCategory = (useId, token, category) => {
  return fetch(`${API}/category/create/${useId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const createProduct = (useId, token, product) => {
  return fetch(`${API}/product/create/${useId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
