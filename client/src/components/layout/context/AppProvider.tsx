'use client'
import { AppProviderTypes } from '@/types/appProvider.interface'
import { FC } from 'react'
import { useState } from 'react'
import { AppContext } from '@/hooks/useAppContext'

export const AppProvider: FC<AppProviderTypes> = ({ children }) => {
	const [searchValue, setSearchValue] = useState<string>('')
	const [option, setOption] = useState<string>('Выберите категорию подарка')
	const [price, setPrice] = useState<string>(String(25000))
	return (
		<AppContext.Provider
			value={{
				searchValue,
				setSearchValue,
				setOption,
				option,
				price,
				setPrice,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
