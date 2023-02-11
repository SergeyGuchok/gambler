import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Column from 'components/Column';
import CasinoList from 'containers/CasinoList';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import { API_URL } from 'constants/index';

const sx = (theme) => {
  return {
    '.MuiDialog-paper': {
      borderRadius: '30px',
      maxWidth: '80%',
      boxShadow: '0px 50px 120px rgba(0, 0, 0, 0.1)',

      [theme.breakpoints.down('md')]: {
        boxShadow: 'none',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
      },
    },
  };
};

const subtitle = `
Are you ready to win big? Check out crypto section and explore the best casinos around the world. 
With unbeatable bonuses, fantastic games, and world-class customer service, 
we promise to deliver a unique gaming experience that you won't 
find anywhere else. Start your journey today and join the 
millions of satisfied players who have already won big!`;

export default function Crypto({ listCasinos }) {
  return (
    <>
      <Head>
        <title>TheGamblr - Crypto gambling sites reviews 2023</title>
        <meta
          name="description"
          content="Find the best online crypto gambling websites with our reviews and information. Play your favorite gambling games and win big!"
        />
      </Head>
      <Box sx={{ height: '270px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="crypto gambling" />
        <Subtitle content={subtitle} />
        <CasinoList category="crypto" casinos={listCasinos} />
      </Column>
    </>
  );
}

export async function getServerSideProps() {
  const url =
    process.env.ENVIRONMENT === 'production'
      ? API_URL
      : 'http://localhost:3000/api';
  const resultList = await axios.get(`${url}/casinos/list/crypto`);
  const { data: listData } = resultList.data;

  return {
    props: {
      listCasinos: listData,
    },
  };
}
