import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import productReducer from '../features/products/productSlice'
import productsReducer from '../features/products/productsSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    products: productsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
