import { NextPage } from 'next'
import { selectLocale } from '../src/redux/features/locale/localeSlice'
import { useAppSelector } from '../src/redux/hooks'

const Home: NextPage = () => {
	const locale = useAppSelector(selectLocale)

	return (
		<>
			<h1>{locale.title}</h1>
			<p>{locale.description}</p>
		</>
	)
}

export default Home