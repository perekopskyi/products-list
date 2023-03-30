import { Product, ProductViewData } from '../features/products/productsSlice'

export const normilizeProductsToView = (products: Array<Product>): Array<ProductViewData> => {
  return products.map((product) => ({...product, price: `$${product.price}` }))
}
