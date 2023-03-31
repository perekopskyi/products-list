import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { normilizeProductsToView } from '../../utils/normilizeProductsToView'
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

export interface ProductViewData {
  'id': number
  'title': string
  'description': string
  'price': string
  'rating': number
  'stock': number
  'category': string
  'thumbnail': string
  [key: string]: string | number // Add an index signature to allow accessing properties using a string value

}

export enum ProductsStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface Products {
  products: Array<ProductViewData>
  status: ProductsStatus
  loaded: boolean
}

const initialState: Products = {
  products: [],
  status: ProductsStatus.IDLE,
  loaded: false
}

export const getProductsAsync = createAsyncThunk(
  'products/getProducts',
  async () => await getProducts()
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.products = [...state.products, action.payload]
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProductsAsync.pending, state => {
        state.status = ProductsStatus.LOADING
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.status = ProductsStatus.IDLE
        state.loaded = true
        state.products = normilizeProductsToView(action.payload.products)
      })
      .addCase(getProductsAsync.rejected, state => {
        state.status = ProductsStatus.FAILED
      })
  },
})

export const { updateList } = productsSlice.actions

export default productsSlice.reducer
