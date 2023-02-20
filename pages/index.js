import Head from 'next/head';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { API_URL } from 'constants/index';

import Column from 'components/common/Column';

import Title from 'components/common/Title';
import Subtitle from 'components/common/Subtitle';

// page components
import TopCasinos from 'components/HomePage/TopCasinos';

const subtitle = `
Thegamblr.com is a website that
collects and consolidates information about multiple online casino
websites, allowing players to easily
compare different casino sites and join the one that
best fits their needs.
The website provides a comprehensive overview of each casino,
including information about the games, bonuses, and
promotions offered, as well as reviews and ratings from
customers. Players can use Thegamblr.com to quickly find the
best casino for them and enjoy secure, real money gambling
at expert-approved sites offering big bonuses,
hundreds of games and mobile compatibility.
`;

const DynamicDisclaimer = dynamic(() =>
  import('components/HomePage/Disclaimer'),
);
const DynamicCasinoList = dynamic(() => import('containers/CasinoList'));

export default function Home({ listCasinos, topCasinos }) {
  return (
    <>
      <Head>
        <title>Best Online Casinos 2023 Reviews | TheGamblr.com</title>
        <meta
          name="description"
          content="Find the best online casinos and betting websites with our 2023 reviews, bonuses and promotions information and free sign up money. Play your favorite gambling games and win big!"
        />
        <meta
          name="keywords"
          content="Online Casino, Gambling, Casino Games, Slots, Roulette, Blackjack, Poker, Baccarat, Craps, Video Poker, Live Casino, Online Gambling, Betting, Sports Betting, Online Sports Betting, Casino Bonuses, Promotions, Casino Reviews, Casino Strategy, Real Money Casino, Mobile Casino"
        />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="online gambling" />
        <Subtitle content={subtitle} />
        <TopCasinos casinos={topCasinos} />
        <DynamicDisclaimer />
        <DynamicCasinoList isHomePage casinos={listCasinos} />
      </Column>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${API_URL}/casinos`);

  return {
    props: {
      listCasinos: data.slice(3),
      topCasinos: data.slice(0, 3),
    },
  };
}
