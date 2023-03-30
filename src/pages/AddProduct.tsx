import { Link } from 'react-router-dom'
import { Box, IconButton, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { ROUTES } from '../App'

export const AddProduct = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link to={ROUTES.ROOT}>
          <IconButton aria-label="back">
            <KeyboardBackspaceIcon />
          </IconButton>
        </Link>
        <Typography variant="h3" component="h2">
          Add Product
        </Typography>
      </Box>
    </div>
  )
}
