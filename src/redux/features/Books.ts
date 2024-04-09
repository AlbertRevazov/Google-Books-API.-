import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Books } from '../../components/Main/BooksTypes'

export interface BooksState {
	isLoading: boolean
	books: null | Books
}

const initialState: BooksState = {
	isLoading: false,
	books: null,
}

type searchProps = {
	keyword: string
	category: string
	order: 'relevance' | 'newest'
}
export const getSearchBooks = createAsyncThunk(
	'search',
	async ({ keyword = '', category, order }: searchProps) => {
		try {
			const data = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${keyword}categories=[${category}]&orderBy=${order}&maxResults=5`
			).then(res => res.json())
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const counterSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},

	extraReducers(builder) {
		builder.addCase(getSearchBooks.pending, state => {
			state.isLoading = true
		})
		builder.addCase(getSearchBooks.fulfilled, (state, action) => {
			state.isLoading = false
			state.books = action.payload
		})
		builder.addCase(getSearchBooks.rejected, state => {
			state.isLoading = false
		})
	},
})

export default counterSlice.reducer
