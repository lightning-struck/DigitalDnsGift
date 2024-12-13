'use client'

import React, { useContext, useState } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import { IHeaderProps } from './header.interface'
import cn from 'classnames'
import { Cross } from '@/icons/Cross'
import { Search } from '@/icons/Search'
import { Dropdown } from '@/components/shared/dropdown/dropdown'
import { AppContext } from '@/hooks/useAppContext'
export const Header: React.FC<IHeaderProps> = props => {
	const { min, max } = props
	const listItems = [
		{
			id: 1,
			text: 'Музыка',
		},
		{
			id: 2,
			text: 'Красота и Здоровье',
		},
		{
			id: 3,
			text: 'Бытовая техника',
		},
		{
			id: 4,
			text: 'Компьютеры',
		},
		{
			id: 5,
			text: 'Авто',
		},
	]
	const { option, setOption, price, setPrice } = useContext(AppContext)

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
					<Dropdown
						option={option}
						setOption={setOption}
						inputClass={styles.dropdown_inner}
						wrapperClass={styles.dropdown_wrapper}
						placeholder={'Выберите категорию подарка'}
						variable='hover'
						listItems={listItems}
					/>

					<p>Ценовой диапазон</p>
					<input
						type='range'
						value={price}
						onChange={e => setPrice(e.target.value)}
						min={min}
						max={max}
						step='100'
						className={styles.rangeInput}
					/>
					<span>до {price} руб.</span>
				</div>
			</div>
		</header>
	)
}
