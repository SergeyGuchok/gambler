import 'styles/index.css';
import 'styles/reset.css';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material';

import TopBarNavigation from '../containers/Navigation';

export default function App({ Component, pageProps }) {
  const theme = createTheme({});

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="TheGamblr" />
        <meta name="robots" content="all" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        {/*{process.env.ENVIRONMENT === 'production' && (*/}
        {/*  <script*/}
        {/*    dangerouslySetInnerHTML={{*/}
        {/*      __html: `*/}
        {/*     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};*/}
        {/*     m[i].l=1*new Date();*/}
        {/*     for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}*/}
        {/*     k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})*/}
        {/*     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");*/}

        {/*     ym(92053324, "init", {*/}
        {/*          clickmap:true,*/}
        {/*          trackLinks:true,*/}
        {/*          accurateTrackBounce:true,*/}
        {/*          webvisor:true*/}
        {/*     });`,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*)}*/}
      </Head>
      <TopBarNavigation />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
