import { FC } from 'react'
import { useBooksHook } from './hooks'
import { Form } from './sections/Form'
import { List } from './sections/List'
import { Loader } from '../common/Loader'

import styles from './Main.module.scss'

export const Main: FC = () => {
	const { books, page, isFetched, pageCount, isLoading, moreFetch } =
		useBooksHook()
	return (
		<div className={styles.container}>
			<Form />

			{!!books.totalItems && <List list={books} />}

			{isFetched && !books.totalItems && (
				<p className={styles.not_found}>
					Not Found <span>Books</span>, try another word
				</p>
			)}

			{isLoading ? (
				<Loader />
			) : (
				page < pageCount &&
				!isLoading && (
					<button className={styles.btn} onClick={moreFetch}>
						more
					</button>
				)
			)}
		</div>
	)
}
