import React, { FC } from 'react'
import styles from './Loader.module.scss'

export const Loader: FC = () => {
	return (
		<div className={styles.container}>
			<img
				className={styles.loader}
				src='/assets/preloader.gif'
				alt='loader'
				loading='lazy'
			/>
		</div>
	)
}
