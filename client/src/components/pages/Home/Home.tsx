'use client'
import React, { useContext } from 'react'
import styles from './home.module.scss'
import { GiftCard } from '@/components/shared/GiftCard/GiftCard'
import { IGiftCardProps } from '@/components/shared/GiftCard/giftCard.interface'
import { products } from '@/data/data'
import { AppContext } from '@/hooks/useAppContext'

export const Home = () => {
	const { option, price } = useContext(AppContext)
	const filteredProductsByInterests = option
		? products.filter(card => card.interests.includes(option))
		: products

	const filteredProducts = filteredProductsByInterests.filter(
		card => card.price <= Number(price)
	)
	return (
		<div className={styles.giftContainer}>
			<h1 className={styles.giftTitle}>Подарки для вас</h1>
			<div className={styles.giftCards}>
				{filteredProducts.map((card, i) => (
					<GiftCard
						image={card.image}
						interests={card.interests}
						name={card.name}
						key={i}
						icon={'🎁'}
						price={card.price}
						buttonText={'Выбрать'}
					/>
				))}
			</div>
		</div>
	)
}
