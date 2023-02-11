import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Column from 'components/Column';
import CasinoList from 'containers/CasinoList';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import { API_URL } from 'constants/index';

const subtitle = `
Here at Thegamblr.com, we promote the best online casinos for case opening gaming. 
With our selection of the most trusted and reliable casinos, you can get 
the best experience for your case opening entertainment. 
Get ready for great bonuses, exciting games, and more! 
Come and join us now and experience the thrill of case opening gaming!`;

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
export default function Cases({ listCasinos }) {
  return (
    <>
      <Head>
        <title>TheGamblr - Case opening casinos reviews 2023</title>
        <meta
          name="description"
          content="Find the best case opening casinos and websites with our reviews and information. Open cases and win big!"
        />
      </Head>
      <Box sx={{ height: '270px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="case opening" />
        <Subtitle content={subtitle} />
        <CasinoList category="cases" casinos={listCasinos} />
      </Column>
    </>
  );
}

export async function getServerSideProps() {
  const url =
    process.env.ENVIRONMENT === 'production'
      ? API_URL
      : 'http://localhost:3000/api';
  const resultList = await axios.get(`${url}/casinos/list/cases`);
  const { data: listData } = resultList.data;

  return {
    props: {
      listCasinos: listData,
    },
  };
}
