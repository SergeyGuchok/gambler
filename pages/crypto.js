import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Column from 'components/common/Column';
import Title from 'components/common/Title';
import Subtitle from 'components/common/Subtitle';
import { API_URL } from 'constants/index';
import dynamic from 'next/dynamic';
import TopTitle from 'components/common/TopTitle';

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

const DynamicCasinoList = dynamic(() => import('containers/CasinoList'));

const subtitle = `
Crypto casinos are the newest and hottest way to play online. 
With the best security, faster transactions and zero fees, these sites offer a superior 
gaming experience with anonymity and privacy that traditional online casinos can’t match. 
Our team of experts has searched the web to bring you the top crypto casinos so you can start 
playing with confidence. Whether you’re looking for slots, table games or live dealer experiences,
 we have the perfect crypto casino for your needs!`;

export default function Crypto({ listCasinos }) {
  return (
    <>
      <Head>
        <title>Crypto Online Casinos 2023 | TheGamblr.com</title>
        <meta
          name="description"
          content="Betting on online casinos is now more convenient and secure with cryptocurrency. Enjoy the ultimate gaming experience with fast, secure and anonymous transactions at our online casinos that accept cryptocurrency."
        />
        <meta
          name="keywords"
          content="online casino, cryptocurrency casino, crypto casino, Bitcoin casino, Ethereum casino, Litecoin casino, Dogecoin casino, accepting crypto, Bitcoin gambling, Ethereum gambling, crypto gambling, cryptocurrency gambling, crypto gaming"
        />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="crypto gambling" />
        <Subtitle content={subtitle} />
        <TopTitle />
        <DynamicCasinoList category="crypto" casinos={listCasinos} />
      </Column>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(`${API_URL}/casinos/list/crypto`);

  return {
    props: {
      listCasinos: data,
    },
  };
}
