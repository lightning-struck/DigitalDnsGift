'use client'

import React, { useState } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import { IHeaderProps } from './header.interface'
import cn from 'classnames'
import { Cross } from '@/icons/Cross'
import { Search } from '@/icons/Search'
export const Header: React.FC<IHeaderProps> = props => {
	const { min, max } = props
	const [searchText, setSearchText] = useState<string>('')
	const [priceRange, setPriceRange] = useState<string>(String(max / 2))
	const [showTextContainer, setShowTextContainer] = useState<boolean>(false)
	return (
		<header className={styles.header}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<img src='./picture/logo.png' alt='Логотип' />
				</div>

				<div className={styles['header-buttons']}>
					<button
						onClick={() => setShowTextContainer(!showTextContainer)}
						className={styles.search_btn}
					>
						{showTextContainer ? <Cross /> : <Search />}
					</button>
					<Link href={'https://www.dns-shop.ru'} target='_blank'>
						Перейти на сайт
					</Link>
				</div>
			</div>

			<div
				className={cn(
					styles.textContainer,
					showTextContainer && styles.textContainer_visible
				)}
			>
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
						min={min}
						max={max}
						step='100'
						className={styles.rangeInput}
					/>
					<span>до {priceRange} руб.</span>
				</div>
			</div>
		</header>
	)
}
