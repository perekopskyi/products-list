import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, IconButton, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { ROUTES } from '../App'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getProductsAsync } from '../features/products/productsSlice'
import { ProductList } from '../components/ProductList'

export const Products = () => {
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.products) 

  useEffect(() => {
    if (!products.length) {
      dispatch(getProductsAsync())
    }
  }, [])

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h3" component="h2">
          Products
        </Typography>
        <Link to={ROUTES.ADD_PRODUCT}>
          <IconButton aria-label="add">
            <AddCircleOutlineIcon />
          </IconButton>
        </Link>
      </Box>

      <ProductList />
    </div>
  )
}
