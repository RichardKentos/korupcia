import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import "../styles/Cards.css"
import "../styles/Intro.css"


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
