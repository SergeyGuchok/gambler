import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Column from 'components/Column';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import { API_URL } from 'constants/index';
import dynamic from 'next/dynamic';

const subtitle = `
Are you looking for the best skins casino sites? Look no further! Our 
site offers a comprehensive list of the highest quality skins 
casino sites on the web. We provide detailed reviews and ratings
to help you make the best choice. With us, you can rest 
assured that you’ll find the perfect skins casino site for you! Try us today!`;

const DynamicCasinoList = dynamic(() => import('containers/CasinoList'));

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
export default function Skins({ listCasinos }) {
  return (
    <>
      <Head>
        <title>TheGamblr - Skins gambling casinos 2023 reviews</title>
        <meta
          name="description"
          content="Find the best online skins gambling casinos with our reviews and information. Play your favorite skins games and win big!"
        />
      </Head>
      <Box sx={{ height: '270px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="skins gambling" />
        <Subtitle content={subtitle} />
        <DynamicCasinoList category="skins" casinos={listCasinos} />
      </Column>
    </>
  );
}

export async function getServerSideProps() {
  const url =
    process.env.ENVIRONMENT === 'production'
      ? API_URL
      : 'http://localhost:3000/api';
  const resultList = await axios.get(`${url}/casinos/list/skins`);
  const { data: listData } = resultList.data;

  return {
    props: {
      listCasinos: listData,
    },
  };
}
