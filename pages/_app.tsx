import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NFT DROP</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/128/6298/6298900.png"
        />
      </Head>
      <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  )
}

export default MyApp
