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
Are you looking for the best skins casino sites? Look no further! Our 
site offers a comprehensive list of the highest quality skins 
casino sites on the web. We provide detailed reviews and ratings
to help you make the best choice. With us, you can rest 
assured that you’ll find the perfect skins casino site for you! Try us today!`;

const DynamicCasinoList = dynamic(() => import('containers/CasinoList'));
export default function Skins({ listCasinos }) {
  const title = 'Skins Online Casinos 2023 | TheGamblr.com';
  const description =
    'Get ready to play your favorite online casino games with ingame skins! With a variety of games to choose from and some of the best skins available, you can have a great online gaming experience. Play for real money and win big with secure and safe payment methods. Enjoy a unique and exciting gaming experience with ingame skins and online casino games!';
  const logoUrl =
    'https://ams3.digitaloceanspaces.com/thegamblr-storage/seo-content/images/logo.webp';
  const pageUrl = 'https://www.thegamblr.com/skins';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="skins gambling, online skins gambling casinos, online skins casinos, skins gamlbing 2023"
        />
        {createDynamicMetatags({ title, description, logoUrl, pageUrl })}
      </Head>
      <Box sx={{ height: '200px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="skins gambling" />
        <Subtitle content={subtitle} />
        <TopTitle />
        <DynamicCasinoList category="skins" casinos={listCasinos} />
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
