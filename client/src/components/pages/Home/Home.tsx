'use client'
import React, { useContext, useState } from 'react'
import styles from './home.module.scss'
import { GiftCard } from '@/components/shared/GiftCard/GiftCard'
import { IGiftCardProps } from '@/components/shared/GiftCard/giftCard.interface'
import { products } from '@/data/data'
import { AppContext } from '@/hooks/useAppContext'
import { useEffect } from 'react'
import { Spinner } from '@/components/shared/spinner/spinner'
export const Home = () => {
	const { option, price } = useContext(AppContext)
	const [activeSpinner, setActiveSpinner] = useState<boolean>(true)
	useEffect(() => {
		setActiveSpinner(true)
		setTimeout(() => {
			setActiveSpinner(false)
		}, 1500)
	}, [option])
	const filteredProductsByInterests = option
		? products.filter(card => card.interests.includes(option))
		: products

	const filteredProducts = filteredProductsByInterests.filter(
		card => card.price <= Number(price)
	)
	const getRandomProducts = (
		productsArray: IGiftCardProps[],
		count: number
	) => {
		const shuffled = productsArray.sort(() => 0.5 - Math.random())
		return shuffled.slice(0, count)
	}

	const randomProducts = getRandomProducts(filteredProducts, 5)
	return (
		<>
			<Spinner active={activeSpinner} />

			<div className={styles.giftContainer}>
				<h1 className={styles.giftTitle}>Подарки для вас</h1>
				<div className={styles.giftCards}>
					{randomProducts.map((card, i) => (
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
		</>
	)
}
