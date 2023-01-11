import { Html, Head, Main, NextScript } from 'next/document'
import TopBarNavigation from 'containers/Navigation';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const backgroundGradient = {
  zIndex: -1,
  background: 'radial-gradient(50% 50% at 50% 50%, #DAA520 0%, rgba(218, 165, 32, 0) 100%)',
  opacity: 0.3,
  width: '100%',
  position: 'absolute',
  left: 0,
  top: '150px',
  height: '1000px',
};


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <TopBarNavigation />
        <Box sx={backgroundGradient} />
        <Container maxWidth="xl">
        <Main />
        </Container>
        <NextScript />
      </body>
    </Html>
  )
}
