import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Column from 'components/common/Column';
import Title from 'components/common/Title';
import Subtitle from 'components/common/Subtitle';
import { API_URL } from 'constants/index';
import dynamic from 'next/dynamic';
import TopTitle from 'components/common/TopTitle';

const subtitle = `
Here at Thegamblr.com, we promote the best online casinos for case opening gaming. 
With our selection of the most trusted and reliable casinos, you can get 
the best experience for your case opening entertainment. 
Get ready for great bonuses, exciting games, and more! 
Come and join us now and experience the thrill of case opening gaming!`;

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
export default function Cases({ listCasinos }) {
  return (
    <>
      <Head>
        <title>Case Opening Casinos 2023 | TheGamblr.com</title>
        <meta
          name="description"
          content="Unlock the excitement with case opening casinos! Enjoy the thrill of opening cases for the chance to win big prizes. With a wide selection of cases and the best odds around, there's something for everyone. Play now and get ready to win!"
        />
        <meta
          name="keywords"
          content="case opening casinos, case opening gambling, case opening sites, case opening jackpots, case openings 2023"
        />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="case opening" />
        <Subtitle content={subtitle} />
        <TopTitle />
        <DynamicCasinoList category="cases" casinos={listCasinos} />
      </Column>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(`${API_URL}/casinos/list/cases`);

  return {
    props: {
      listCasinos: data,
    },
  };
}
