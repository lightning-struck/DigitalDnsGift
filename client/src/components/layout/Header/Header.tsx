'use client' // Делает компонент клиентским

import React, { useState } from 'react'
import styles from './header.module.scss'

export const Header = () => {
	const [searchText, setSearchText] = useState('')
	const [priceRange, setPriceRange] = useState('')

	const handleRedirect = () => {
		window.open('https://www.dns-shop.ru', '_blank') // Открытие в новой вкладке
	}

	return (
		<header className={styles.header}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<img src='./picture/logo.png' alt='Логотип' />
				</div>

				<div className={styles['header-buttons']}>
					<button onClick={handleRedirect}>Перейти на сайт</button>
				</div>
			</div>

			<div className={styles.textContainer}>
				<div className={styles.text}>
					<p>Подарки зависят только от вашего выбора!</p>
					<p>Введите что вы хотите найти</p>
					<input
						type='text'
						value={searchText}
						onChange={e => setSearchText(e.target.value)}
						placeholder='Поиск'
						className={styles.input}
					/>
					<p>Ценовой диапазон</p>
					<input
						type='range'
						value={priceRange}
						onChange={e => setPriceRange(e.target.value)}
						min='0'
						max='50000'
						step='100'
						className={styles.rangeInput}
					/>
					<span>до {priceRange} руб.</span>
				</div>
			</div>
		</header>
	)
}
