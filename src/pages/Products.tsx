import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, IconButton, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { ROUTES } from '../App'
import { useAppDispatch } from '../app/hooks'
import { getProductsAsync } from '../features/products/productsSlice'

export const Products = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProductsAsync())
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
    </div>
  )
}
