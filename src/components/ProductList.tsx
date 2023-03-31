import { useEffect, useState } from 'react'
import { Box, Paper, TextField } from '@mui/material'
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid'
import { useAppSelector } from '../app/hooks'
import {
  ProductsStatus,
  ProductViewData,
} from '../features/products/productsSlice'

const columns: GridColDef<ProductViewData>[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 80,
  },
  {
    field: 'title',
    headerName: 'Title',
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 400,
  },
  {
    field: 'price',
    headerName: 'Price',
  },
  {
    field: 'thumbnail',
    headerName: 'Image',
    renderCell: ({ value }: GridCellParams) =>
      value ? (
        <img src={String(value)} alt="thumbnail" height={50} width={50} />
      ) : null,
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
    width: 100,
  },
]

const filterData = (
  products: Array<ProductViewData>,
  searchValue: string
): Array<ProductViewData> =>
  products.filter(product => {
    for (let key in product) {
      if (String(product[key]).includes(searchValue)) {
        return product
      }
    }
  })

const List = () => {
  const { products } = useAppSelector(state => state.products)

  const [dataToView, setDataToView] = useState<Array<ProductViewData>>([])
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    setDataToView(filterData(products, searchValue))
  }, [products, searchValue])

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <Box marginBottom={1}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={event => setSearchValue(event.target.value)}
        />
      </Box>
      <DataGrid {...{ columns }} rows={dataToView} />
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
