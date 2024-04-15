import React, { FC } from 'react'
import styles from './Select.module.scss'

type SelectProps = {
	categoryChange: React.Dispatch<React.SetStateAction<string>>
	orderChange: React.Dispatch<React.SetStateAction<'relevance' | 'newest'>>
	isOrder: boolean
}

const categories = [
	'all',
	'art',
	'biography',
	'computers',
	'history',
	'medical',
	'poetry',
]
const order = ['relevance', 'newest']

export const Select: FC<SelectProps> = ({
	categoryChange,
	orderChange,
	isOrder,
}) => {
	const data = isOrder ? order : categories
	const changeHandler: React.ChangeEventHandler<HTMLSelectElement> = e => {
		const handler = isOrder ? orderChange : categoryChange
		handler(e.currentTarget.value as 'relevance' | 'newest')
	}

	return (
		<div className={styles.select_root}>
			<p className={styles.title}>{isOrder ? 'Sorting by' : 'Categories'}</p>
			<select onChange={changeHandler} className={styles.select}>
				{data.map(item => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	)
}
