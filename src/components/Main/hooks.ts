import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchMoreBooks, getSearchBooks } from '../../redux/features/Books'
import { Books } from '../../types/BooksTypes'

type UseBooksHookReturn = {
	keyword: string
	books: Books
	isFetched: boolean
	page: number
	pageCount: number
	isLoading: boolean
	handle: React.FormEventHandler<HTMLFormElement | HTMLImageElement>
	moreFetch: () => void
	setKeyword: React.Dispatch<React.SetStateAction<string>>
	setCategories: React.Dispatch<React.SetStateAction<string>>
	setOrder: React.Dispatch<React.SetStateAction<'relevance' | 'newest'>>
}

export const useBooksHook = (): UseBooksHookReturn => {
	const [page, setPage] = useState<number>(0)
	const [keyword, setKeyword] = useState<string>('')
	const [category, setCategories] = useState<string>('all')
	const [order, setOrder] = useState<'relevance' | 'newest'>('relevance')
	const { books, isLoading, isFetched } = useAppSelector(s => s.books)
	const dispatch = useAppDispatch()

	useEffect(() => {}, [books])

	const handle: React.FormEventHandler<
		HTMLFormElement | HTMLImageElement
	> = e => {
		e.preventDefault()
		if (e) dispatch(getSearchBooks({ keyword, category, order }))
		setPage(0)
	}

	const moreFetch = () => {
		dispatch(fetchMoreBooks({ page, order, category, keyword }))
		setPage(prev => prev + 1)
	}
	const pageCount = Math.round(books.totalItems / 30)

	return {
		keyword,
		books,
		page,
		isFetched,
		pageCount,
		isLoading,
		setKeyword,
		handle,
		moreFetch,
		setCategories,
		setOrder,
	}
}
