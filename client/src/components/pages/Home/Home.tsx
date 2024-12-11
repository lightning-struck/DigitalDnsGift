import React from 'react'
import styles from './home.module.scss'

type GiftCardProps = {
	id: string
	icon: string
	date: string
	price: string
	buttonText: string
}

const GiftCard: React.FC<GiftCardProps> = ({
	id,
	icon,
	date,
	price,
	buttonText,
}) => {
	return (
		<div className={styles.giftCard} data-id={id}>
			<div className={styles.giftIcon}>{icon}</div>
			<p className={styles.giftDate}>{date}</p>
			<h2 className={styles.giftPrize}>{price}</h2>
			
			<button className={styles.giftButton}>{buttonText}</button>
		</div>
	)
}

export const Home = () => {
	return (
		<div className={styles.giftContainer}>
			<header className={styles.giftHeader}>
				
			</header>
			<h1 className={styles.giftTitle}>Подарки для вас</h1>
			<div className={styles.giftCards}>
				<GiftCard
					id='1'
					icon='🎁'
					date='смартфон'
					price='200р'
					buttonText='Выбрать'
				/>
				<GiftCard
					id='2'
					icon='🎁'
					date='смартфон'
					price='200р'
					buttonText='Выбрать'
				/>
				<GiftCard
					id='3'
					icon='🎁'
					date='смартфон'
					price='200р'
					buttonText='Выбрать'
				/>
				<GiftCard
					id='4'
					icon='🎁'
					date='смартфон'
					price='200р'
					buttonText='Выбрать'
				/>
				<GiftCard
					id='5'
					icon='🎁'
					date='смартфон'
					price='200р'
					buttonText='Выбрать'
				/>
			</div>
		</div>
	)
}
