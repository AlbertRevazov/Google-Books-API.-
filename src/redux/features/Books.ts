import { createSlice } from '@reduxjs/toolkit'

export interface BooksState {
	isLoading: boolean
	books: null | []
}

const initialState: BooksState = {
	isLoading: false,
	books: null,
}

export const counterSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},

	extraReducers(builder) {
		// builder.addCase(.pending, state => {
		// 	state.isLoading = true
		// })
		// builder.addCase(addCardToBasket.fulfilled, (state, action) => {
		// 	state.isLoading = false
		// 	state.baskets = action.payload?.card
		// 	state.message = action.payload?.message
		// })
		// builder.addCase(addCardToBasket.rejected, state => {
		// 	state.isLoading = false
		// })
	},
})

export default counterSlice.reducer
