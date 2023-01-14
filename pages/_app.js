import 'styles/index.css'
import 'styles/reset.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="casinos, casino, online casinos, gambling, slots, roulette, casino bonuses, casino games, online casino, casino reviews, casino promotions, poker, crypto, betting websites, gambling games, blackjack" />
        <meta name="google-site-verification" content="HcLYprXVBK4pT9iZHIzK0g16-G_49A9UL0fzor8du88" />
        <meta name="description" content="Find the best online casinos and betting websites with our reviews and information. Play your favorite gambling games and win big!" />
        <meta name="author" content="TheGamblr" />
        <meta name="robots" content="all" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();
             for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
             k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

             ym(92053324, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
             });`
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}


