import '@/assets/styles/globals.css'
import type {AppProps} from 'next/app'
import '../firebase/clientApp'

export default function App({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />
}
