import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addProduct } from './productsApi'
import { updateList } from './productsSlice'

export interface NewProduct {
  title: string
  author: string
  year: string
  rating: string
}

export enum ProductStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface ProductInterface {
  product: NewProduct
  status: ProductStatus
}

const initialState = {
  product: {},
  status: ProductStatus.IDLE,
}

export const addProductAsync = createAsyncThunk(
  'products/addProducts',
  async (body: NewProduct, { dispatch }) => {
    const newProduct = await addProduct(body)
    // Add new product to list of products
    dispatch(updateList(newProduct))

    return newProduct
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addProductAsync.pending, state => {
        state.status = ProductStatus.LOADING
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.status = ProductStatus.IDLE
        state.product = action.payload.product
      })
      .addCase(addProductAsync.rejected, state => {
        state.status = ProductStatus.FAILED
      })
  },
})

export const {} = productsSlice.actions

export default productsSlice.reducer
