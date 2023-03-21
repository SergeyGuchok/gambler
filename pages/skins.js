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
        <title>Skins Online Casinos 2023 | TheGamblr.com</title>
        <meta
          name="description"
          content="Get ready to play your favorite online casino games with ingame skins! With a variety of games to choose from and some of the best skins available, you can have a great online gaming experience. Play for real money and win big with secure and safe payment methods. Enjoy a unique and exciting gaming experience with ingame skins and online casino games!"
        />
        <meta
          name="keywords"
          content="skins gambling, online skins gambling casinos, online skins casinos, skins gamlbing 2023"
        />
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

export async function getStaticProps() {
  const { data } = await axios.get(`${API_URL}/casinos/list/skins`);

  return {
    props: {
      listCasinos: data,
    },
  };
}
