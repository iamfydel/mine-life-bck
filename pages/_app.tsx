import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/top.css'
import '../styles/about-us.css'
import '../styles/responsive.css'
import '../styles/animation.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
