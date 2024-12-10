import type { Metadata } from 'next'
import '../styles/main.scss'
import { AppProvider } from '@/components/layout/context/AppProvider'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
export const metadata: Metadata = {
	title: 'IT-HUB Хахатон',
	description: 'IT-HUB Хахатон',
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
