import type { Metadata } from 'next'
import '../styles/main.scss'
import { AppProvider } from '@/components/layout/context/AppProvider'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { useState } from 'react'
export const metadata: Metadata = {
	title: 'Новогодние подарки от DNS',
	description: 'Новогодние подарки от DNS',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<AppProvider>
				<body>
					<Header />
					<main>{children}</main>
					<Footer />
				</body>
			</AppProvider>
		</html>
	)
}
