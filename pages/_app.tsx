import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import "../styles/Cards.css"
import "../styles/Intro.css"


function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    return <Component {...pageProps} />
  }
  else {
    return null
  }
}
export default MyApp
