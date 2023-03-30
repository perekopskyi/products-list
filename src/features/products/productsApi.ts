import { NewProduct } from "./productSlice"

export const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products')
  return response.json()
}

export const addProduct = async (body: NewProduct) => {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  return response.json()
}
