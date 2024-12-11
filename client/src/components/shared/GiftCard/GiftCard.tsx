import React from 'react'
import styles from './giftCard.module.scss'
import { IGiftCardProps } from './giftcard.interface'

export const GiftCard: React.FC<IGiftCardProps> = props => {
	const { id, icon, date, price, buttonText } = props
	return (
		<div className={styles.giftCard} data-id={id}>
			<div className={styles.giftIcon}>{icon}</div>
			<p className={styles.giftDate}>{date}</p>
			<h2 className={styles.giftPrize}>{price}</h2>
			<button className={styles.giftButton}>{buttonText}</button>
		</div>
	)
}
