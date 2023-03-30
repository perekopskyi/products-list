import { Container } from '@mui/system'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { AddProduct } from './pages/AddProduct'
import { Products } from './pages/Products'

export const ROUTES = {
  ROOT: '/',
  ADD_PRODUCT: '/addProduct',
}

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Products />,
  },
  {
    path: ROUTES.ADD_PRODUCT,
    element: <AddProduct />,
  },
])

export const App = () => (
  <Container>
    <RouterProvider router={router} />
    <Outlet />
  </Container>
)
