import { NextPage } from 'next'
import { ReactElement } from 'react'
import Head from 'next/head'

interface Props {
	title?: string
	children: ReactElement
}

const MainLayout: NextPage<Props> = ({ title = 'Boiler', children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="author" content="Colmena" />
				<meta name="description" content="Boiler" />
				<meta name="keywords" content="Boiler, Boiler Manager" />
			</Head>
			<main className="min-w-[360px]">{children}</main>
		</>
	)
}

export default MainLayout
