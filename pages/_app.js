import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    
    <main>
      <Component {...pageProps} />
    </main>

  )
}

export default MyApp
