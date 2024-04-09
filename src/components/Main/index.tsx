import { ChangeEventHandler, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getSearchBooks } from '../../redux/features/Books'
import styles from './Main.module.scss'
import { Books, Items } from './BooksTypes'

export const Main = () => {
	const [data, setData] = useState<Books | null>(null)
	const [keyword, setKeyword] = useState<string>('')
	const [category, setCategories] = useState<string>('all')
	const [order, setOrder] = useState<'relevance' | 'newest'>('relevance')
	const dispatch = useAppDispatch()
	const { books } = useAppSelector(s => s.books)

	useEffect(() => {}, [books])

	// if (!books) return <h2>loading</h2>
	const handle = () => {
		dispatch(getSearchBooks({ keyword, category, order }))
	}
	return (
		<div className={styles.main_root}>
			Main
			<input
				type='text'
				value={keyword}
				onChange={e => setKeyword(e.currentTarget.value)}
				className={styles.input}
			/>
			<button type='button' onClick={handle}>
				find
			</button>
			<select
				className={styles.btn}
				onChange={e => setCategories(e.currentTarget.value)}
			>
				<option value='all'>all</option>
				<option value='art'>art</option>
				<option value='biography'>biography</option>
				<option value='computers'>computers</option>
				<option value='history'>history</option>
				<option value='medical'>medical</option>
				<option value='poetry'>poetry</option>
			</select>
			<select
				className={styles.btn}
				onChange={e =>
					setOrder(e.currentTarget.value as 'newest' | 'relevance')
				}
			>
				<option value='relevance'>relevance</option>
				<option value='newest'>newest</option>
			</select>
			<div>
				{books?.items?.map((book: Items) => (
					<h1>{book.volumeInfo.title}</h1>
				))}
			</div>
		</div>
	)
}
