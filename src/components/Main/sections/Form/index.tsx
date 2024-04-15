import { FC } from 'react'
import { useBooksHook } from '../../hooks'
import { Select } from '../../../common/Select'
import styles from './Form.module.scss'

export const Form: FC = () => {
	const { keyword, setKeyword, handle, setCategories, setOrder } =
		useBooksHook()

	return (
		<div className={styles.container}>
			<h1>Search for Books</h1>
			<form onSubmit={handle} className={styles.form}>
				<input
					type='text'
					value={keyword}
					onChange={e => setKeyword(e.currentTarget.value)}
					className={styles.input}
				/>
				<img
					src='/assets/search.svg'
					alt='search icon'
					className={styles.search}
					onClick={handle}
				/>
			</form>
			<div className={styles.select_wrapper}>
				<Select
					categoryChange={setCategories}
					orderChange={() => {}}
					isOrder={false}
				/>
				<Select orderChange={setOrder} categoryChange={() => {}} isOrder />
			</div>
		</div>
	)
}
