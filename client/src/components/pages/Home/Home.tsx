import React from 'react'
import styles from './home.module.scss'
import { GiftCard } from '@/components/shared/GiftCard/GiftCard'
import { IGiftCardProps } from '@/components/shared/GiftCard/giftcard.interface'

const giftCards: IGiftCardProps[] = [
	{
		id: 1,
		icon: '🎁',
		date: 'смартфон',
		buttonText: 'Выбрать',
		price: '200р',
	},
	{
		id: 2,
		icon: '🎁',
		date: 'смартфон',
		buttonText: 'Выбрать',
		price: '200р',
	},
	{
		id: 3,
		icon: '🎁',
		date: 'смартфон',
		buttonText: 'Выбрать',
		price: '200р',
	},
	{
		id: 4,
		icon: '🎁',
		date: 'смартфон',
		buttonText: 'Выбрать',
		price: '200р',
	},
	{
		id: 5,
		icon: '🎁',
		date: 'смартфон',
		buttonText: 'Выбрать',
		price: '200р',
	},
]

export const Home = () => {
	return (
		<div className={styles.giftContainer}>
			<h1 className={styles.giftTitle}>Подарки для вас</h1>
			<div className={styles.giftCards}>
				{giftCards.map(card => (
					<GiftCard
						key={card.id}
						id={card.id}
						icon={card.icon}
						date={card.date}
						price={card.price}
						buttonText={card.buttonText}
					/>
				))}
			</div>
		</div>
	)
}
