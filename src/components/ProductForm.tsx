import { Alert, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAppDispatch } from '../app/hooks'
import { addProductAsync } from '../features/products/productSlice'

export interface Values {
  title: string
  author: string
  year: string
  rating: string
}

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  author: yup.string().optional(),
  year: yup.string().optional(),
  rating: yup.number().min(1).max(5),
})

export const ProductForm = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      year: '',
      rating: '',
    },
    validationSchema,
    onSubmit: (values: Values) => {
      dispatch(addProductAsync(values))
    },
    enableReinitialize: true,
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      {formik.isSubmitting ? (
        <Box marginBottom={2}>
          <Alert severity="success">
            New product added! Please look at the products list
          </Alert>
        </Box>
      ) : null}
      <Box marginBottom={2}>
        <TextField
          required
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          id="author"
          name="author"
          label="Author"
          value={formik.values.author}
          onChange={formik.handleChange}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          id="year"
          name="year"
          label="Year"
          value={formik.values.year}
          onChange={formik.handleChange}
          error={formik.touched.year && Boolean(formik.errors.year)}
          helperText={formik.touched.year && formik.errors.year}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          id="rating"
          name="rating"
          label="Rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          error={formik.touched.rating && Boolean(formik.errors.rating)}
          helperText={formik.touched.rating && formik.errors.rating}
        />
      </Box>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  )
}
