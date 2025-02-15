import Head from 'next/head';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { API_URL } from 'constants/index';
import Column from 'components/common/Column';
import Title from 'components/common/Title';
import Subtitle from 'components/common/Subtitle';
import { createDynamicMetatags } from 'utils/metatags';

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

const DynamicTopCasinos = dynamic(() =>
  import('components/HomePage/TopCasinos'),
);
const DynamicDisclaimer = dynamic(() =>
  import('components/HomePage/Disclaimer'),
);
const DynamicCasinoList = dynamic(() => import('containers/CasinoList'));

export default function Home({ listCasinos, topCasinos }) {
  const title = 'Best Online Casinos 2023 Reviews | TheGamblr.com';
  const description =
    'Find the best online casinos and betting websites with our 2023 reviews, bonuses and promotions information and free sign up money. Play your favorite gambling games and win big!';
  const logoUrl =
    'https://ams3.digitaloceanspaces.com/thegamblr-storage/seo-content/images/logo.webp';
  const pageUrl = 'https://www.thegamblr.com/';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Online Casino, Gambling, Casino Games, Slots, Roulette, Blackjack, Poker, Baccarat, Craps, Video Poker, Live Casino, Online Gambling, Betting, Sports Betting, Online Sports Betting, Casino Bonuses, Promotions, Casino Reviews, Casino Strategy, Real Money Casino, Mobile Casino"
        />
        {createDynamicMetatags({ title, description, logoUrl, pageUrl })}
      </Head>
      <Box sx={{ height: '200px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="online gambling" />
        <Subtitle content={subtitle} />
        <DynamicTopCasinos casinos={topCasinos} />
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
