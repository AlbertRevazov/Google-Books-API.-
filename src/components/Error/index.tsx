import React, { FC } from 'react'
import styles from './Error.module.scss'

export const Error: FC = () => {
	return (
		<div className={styles.error}>
			<h2>Ошибочка, нет такой страницы</h2>
			<img
				src='https://media.tenor.com/U2fVhJHF1bAAAAAi/error.gif'
				alt='error'
			/>
		</div>
	)
}
