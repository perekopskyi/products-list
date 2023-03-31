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
  const { loaded } = useAppSelector(state => state.products)

  useEffect(() => {
    if (!loaded) {
      dispatch(getProductsAsync())
    }
  }, [])

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }} marginBottom={2}>
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
