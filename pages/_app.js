import 'styles/index.css'
import 'styles/reset.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="casinos, online casinos, betting websites, gambling games, blackjack" />
        <meta name="google-site-verification" content="HcLYprXVBK4pT9iZHIzK0g16-G_49A9UL0fzor8du88" />
        <meta name="description" content="Find the best online casinos and betting websites with our reviews and information. Play your favorite gambling games and win big!" />
        <meta name="author" content="TheGamblr" />
        <meta name="robots" content="html, follow" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
