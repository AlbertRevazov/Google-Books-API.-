import { FC } from 'react'
import { Books } from '../../../../types/BooksTypes'
import { Card } from '../../../common/Card'
import styles from './List.module.scss'

type ListProps = {
	list: Books
}

export const List: FC<ListProps> = ({ list }) => {
	return (
		<div className={styles.container}>
			<p className={styles.total}>
				Found <span>{list.totalItems}</span> books
			</p>
			<div className={styles.card_wrapper}>
				{list?.items?.map(book => (
					<Card key={book.volumeInfo.title} item={book} />
				))}
			</div>
		</div>
	)
}
