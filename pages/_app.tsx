import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import Locale from '../src/redux/features/locale/Locale'
import Layout from '../src/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Locale>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Locale>
    </Provider>
  )
}

export default MyApp