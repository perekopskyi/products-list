import { Link } from 'react-router-dom'
import { Box, IconButton, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { ROUTES } from '../App'

export const Products = () => {
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
