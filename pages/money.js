import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Column from 'components/common/Column';
import Title from 'components/common/Title';
import Subtitle from 'components/common/Subtitle';
import { API_URL } from 'constants/index';
import dynamic from 'next/dynamic';
import TopTitle from 'components/common/TopTitle';
import { createDynamicMetatags } from 'utils/metatags';

const subtitle = `
Welcome to our site! We promote only the best real money casino sites that offer the 
highest quality online gaming experience. 
Our selection of top-tier casino sites feature the best selection of games, 
generous bonuses and promotions, and secure, reliable payment methods. 
Sign up today and start winning real money!`;

const DynamicCasinoList = dynamic(() => import('containers/CasinoList'));
export default function Money({ listCasinos }) {
  const title = 'Real Money Online Casinos 2023 | TheGamblr.com';
  const description =
    'Experience the thrill of gambling from the comfort of your own home with real money online casinos. Choose from hundreds of games, including slots, blackjack, roulette, video poker and more. Enjoy the best odds and highest payouts in a secure and safe environment. Play now and win big!';
  const logoUrl =
    'https://ams3.digitaloceanspaces.com/thegamblr-storage/seo-content/images/logo.webp';
  const pageUrl = 'https://www.thegamblr.com/money';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="online casino, real money casino, online gambling, real money gambling, casino slots, online slots,
          casino games, online gaming, poker, blackjack, roulette, baccarat, craps, online betting, sports betting,
          real money betting, online casino bonus, casino bonus, online casino loyalty program, online casino rewards, casino rewards, VIP program, online casino VIP"
        />
        {createDynamicMetatags({ title, description, logoUrl, pageUrl })}
      </Head>
      <Box sx={{ height: '200px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="money gambling" />
        <Subtitle content={subtitle} />
        <TopTitle />
        <DynamicCasinoList category="money" casinos={listCasinos} />
      </Column>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${API_URL}/casinos`);

  return {
    props: {
      listCasinos: data,
    },
  };
}
