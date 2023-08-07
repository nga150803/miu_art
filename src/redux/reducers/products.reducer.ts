// productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { RootState } from '../store/store'
import { ppid } from 'process'
import { useNavigate } from 'react-router-dom'

interface Product {
  productId: string
  name: string
  image: string
  description: string
  description_detail: string
  category: string
  price: number
  Views: number
}

interface ProductState {
  loading: boolean
  error: string | null
  data: Product[]
}

const initialState: ProductState = {
  loading: false,
  error: null,
  data: []
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  try {
    const response = await axios.get<Product[]>('http://localhost:8080/api/products')
    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw error.response?.data
    }
    throw error
  }
})

export const addProduct = createAsyncThunk('product/addProduct', async (productData: Product, { rejectWithValue }) => {
  try {
    const response = await axios.post<Product>('http://localhost:8080/api/products/add', productData)
    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data)
    }
    return rejectWithValue(error)
  }
})

export const updateProduct = createAsyncThunk('products/updateProduct', async (action: any, payload: any) => {
  axios
    .put(`http://localhost:8080/api/products/edit/${action._id}`, action)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })

  return null
})

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (productId: string, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${productId}`)
      return productId
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data)
      }
      return rejectWithValue(error)
    }
  }
)

export const getProductById = createAsyncThunk('product/getProductById', async (productId: string) => {
  const response = await axios.get(`http://localhost:8080/api/products/${productId}`)
  return response.data
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false
        const error = action.error as AxiosError
        state.error = error?.message ?? null
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false
        const error = action.error as AxiosError
        state.error = error?.message ?? null
      })

      .addCase(deleteProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false
        // Remove the deleted product from the state
        state.data = state.data.filter((product) => product.productId !== action.payload)
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false
        const error = action.error as AxiosError
        state.error = error?.message ?? null
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        const updatedProduct = action.payload

        return updatedProduct
      })
  }
})

export default productSlice.reducer
