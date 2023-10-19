import 'styles/index.css';
import 'styles/reset.css';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material';
import Script from 'next/script';

import TopBarNavigation from '../containers/Navigation';

export default function App({ Component, pageProps }) {
  const theme = createTheme({});

  return (
    <>
      <Head lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="TheGamblr" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>
      <TopBarNavigation />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
