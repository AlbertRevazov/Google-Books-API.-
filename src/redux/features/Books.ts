import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Books, Items } from '../../types/BooksTypes'

export interface BooksState {
	isLoading: boolean
	books: Books
	isFetched: boolean
}

const initialState: BooksState = {
	isLoading: false,
	books: {
		items: [],
		kind: '',
		totalItems: 0,
	},
	isFetched: false,
}

type searchProps = {
	keyword: string
	category: string
	order: 'relevance' | 'newest'
	page?: number
}

export const getSearchBooks = createAsyncThunk(
	'search',
	async ({ keyword = '', category, order, page = 0 }: searchProps) => {
		try {
			const categoryParameter =
				category !== 'all' ? '+subject' + category : 'all'
			const data = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${keyword}${categoryParameter}&orderBy=${order}&maxResults=30`
			).then(res => res.json())
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const fetchMoreBooks = createAsyncThunk(
	'more',
	async ({ keyword = '', category, order, page = 0 }: searchProps) => {
		try {
			const categoryParameter =
				category !== 'all' ? '+subject' + category : 'all'
			const currentPage = (page + 1) * 30
			const data = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${keyword}${categoryParameter}&orderBy=${order}&maxResults=30&startIndex=${currentPage}`
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
			state.isFetched = true
		})
		builder.addCase(getSearchBooks.rejected, state => {
			state.isLoading = false
		})

		builder.addCase(fetchMoreBooks.pending, state => {
			state.isLoading = true
		})
		builder.addCase(fetchMoreBooks.fulfilled, (state, action) => {
			const { items } = action.payload
			const data = items ? items?.map((el: Items) => el) : []
			state.isLoading = false
			state.books.items = [...state.books.items, ...data]
		})
		builder.addCase(fetchMoreBooks.rejected, state => {
			state.isLoading = false
		})
	},
})

export default counterSlice.reducer
