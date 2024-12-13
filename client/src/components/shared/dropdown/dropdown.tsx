'use client'
import React from 'react'
import { IDropdownProps, ListItemProps } from './dropdown.interface'
import cn from 'classnames'
import s from './dropdown.module.scss'
import { useState } from 'react'
import { useOutsideClick } from '@/hooks/useOutsideClick'

import Link from 'next/link'

const Arrow = () => {
	return (
		<svg className={s.arrow} viewBox='0 0 32 32'>
			<path d='M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z'></path>
			<path d='M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z'></path>
		</svg>
	)
}

export const Dropdown: React.FC<IDropdownProps> = props => {
	const {
		variable,
		placeholder,
		wrapperClass,
		inputClass,
		placeholderClass,
		listWrapper,
		listClass,
		listItemClass,
		listItems,
		option,
		setOption,
	} = props

	const [isListShow, setListShow] = useState<boolean>(false)

	const innerRef = useOutsideClick(() => setListShow(false))

	const ListItem: React.FC<ListItemProps> = props => {
		const { handleClick, text, query } = props

		return !query ? (
			<li
				onClick={handleClick}
				className={cn(s.hover_list_item, s.click_list_item, listItemClass)}
			>
				{text}
			</li>
		) : (
			<li
				onClick={handleClick}
				className={cn(s.hover_list_item, s.click_list_item, listItemClass)}
			>
				<Link scroll={false} href={{ query: query }}>
					{text}
				</Link>
			</li>
		)
	}
	const handleListItemClick = (option: string) => {
		setListShow(false)
		setOption(option)
	}
	if (variable === 'hover') {
		return (
			<div
				className={cn(
					s.hover_wrapper,
					isListShow && s.hover_select_active,
					wrapperClass
				)}
			>
				<div
					onMouseEnter={() => setListShow(true)}
					onMouseLeave={() => setListShow(false)}
					className={cn(s.hover_select, inputClass)}
				>
					<span className={cn(s.placeholder, placeholderClass)}>
						{option ? option : placeholder}
					</span>
					<Arrow />
					<div className={cn(s.hover_list_wrapper, listWrapper)}>
						<ul
							onClick={() => setListShow(false)}
							className={cn(s.hover_list, listClass)}
						>
							{listItems.map((item, i) => (
								<ListItem
									handleClick={() => handleListItemClick(item.text)}
									query={item.query}
									key={i}
									text={item.text}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		)
	}
	if (variable === 'click') {
		return (
			<div ref={innerRef} className={cn(s.click_wrapper, wrapperClass)}>
				<div
					onClick={() => setListShow(prevShow => !prevShow)}
					className={cn(
						s.click_select,
						isListShow && s.click_select_active,
						inputClass
					)}
				>
					<span className={cn(s.placeholder, placeholderClass)}>
						{option ? option : placeholder}
					</span>
					<Arrow />
					<div className={cn(s.click_list_wrapper, listWrapper)}>
						<ul className={cn(s.click_list, listClass)}>
							{listItems.map((item, i) => (
								<ListItem
									handleClick={() => handleListItemClick(item.text)}
									query={item.query}
									key={i}
									text={item.text}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
