import { FC } from 'react'
import styles from './Card.module.scss'
import { Items } from '../../../types/BooksTypes'

type CardProps = {
	item: Items
}

export const Card: FC<CardProps> = ({ item }) => {
	const { authors, categories, imageLinks, title } = item?.volumeInfo

	return (
		<div className={styles.card_root}>
			<div className={styles.card_img}>
				<img
					loading='lazy'
					src={
						imageLinks?.thumbnail
							? imageLinks.thumbnail
							: '/assets/not_found.jpg'
					}
					alt='book img'
				/>
			</div>

			<div className={styles.card_info}>
				<p className={styles.category}>
					{!!categories?.length ? categories : ''}
				</p>

				<p className={styles.title}>{title}</p>
				<span className={styles.author}>
					{authors?.map((author, idx) => {
						if (idx < authors.length - 1) return author + ', '
						return author
					})}
				</span>
			</div>
		</div>
	)
}
