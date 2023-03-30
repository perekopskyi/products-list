import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from './productsApi'

export interface Product {
  'id': number
  'title': string
  'description': string
  'price': number
  'rating': number
  'stock': number
  'category': string
  'thumbnail': string
}

export enum ProductsStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface Products {
  products: Array<Product>
  status: ProductsStatus
}

const initialState: Products = {
  products: [],
  status: ProductsStatus.IDLE,
}

export const getProductsAsync = createAsyncThunk(
  'products/getProducts',
  async () => await getProducts()
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductsAsync.pending, state => {
        state.status = ProductsStatus.LOADING
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.status = ProductsStatus.IDLE
        state.products = action.payload.products // TODO ProductViewData(action.payload.products)
      })
      .addCase(getProductsAsync.rejected, state => {
        state.status = ProductsStatus.FAILED
      })
  },
})

export const {} = productsSlice.actions

export default productsSlice.reducer
