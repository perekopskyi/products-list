import { Paper } from '@mui/material'
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridToolbar,
} from '@mui/x-data-grid'
import { useAppSelector } from '../app/hooks'
import {
  ProductsStatus,
  ProductViewData,
} from '../features/products/productsSlice'

const List = () => {
  const { products } = useAppSelector(state => state.products)

  const columns: GridColDef<ProductViewData>[] = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'title',
      headerName: 'Title',
    },
    {
      field: 'description',
      headerName: 'Description',
    },
    {
      field: 'price',
      headerName: 'Price',
    },
    {
      field: 'thumbnail',
      headerName: 'Image',
      renderCell: (params: GridCellParams) => (
        <img
          src={String(params.value)}
          alt="thumbnail"
          height={50}
          width={50}
        />
      ),
    },
    {
      field: 'rating',
      headerName: 'Rating',
    },
    {
      field: 'stock',
      headerName: 'Stock',
    },
    {
      field: 'category',
      headerName: 'Category',
    },
  ]

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...{ columns }}
        rows={products}
        pagination
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  )
}

export const ProductList = () => {
  const { status } = useAppSelector(state => state.products)
  return (
    <Paper>
      {status === ProductsStatus.LOADING ? (
        <p>Loading</p>
      ) : status === ProductsStatus.FAILED ? (
        <p>Something went wrong...</p>
      ) : (
        <List />
      )}
    </Paper>
  )
}
