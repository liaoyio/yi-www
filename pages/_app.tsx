import { Toaster } from '@components/ui'
import '@styles/style.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <Component {...pageProps} className="dark" />
    </>
  )
}
