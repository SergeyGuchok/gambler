import { useCallback, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Column from 'components/Column';
import CasinoModal from 'components/CasinoModal';
import CasinoList from 'containers/CasinoList';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import { disableScroll, enableScroll } from 'utils';
import { API_URL } from 'constants/index';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  const [modalData, setModalData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setModalData(null);
  }, [setModalData, setIsOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Head>
        <title>TheGamblr - Best cypto gamlbing sites!</title>
        <meta
          name="description"
          content="Find the best online crypto gambling websites with our reviews and information. Play your favorite gambling games and win big!"
        />
      </Head>
      <Box sx={{ height: '270px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="crypto gambling" />
        <Subtitle content={subtitle} />
        <CasinoList
          openModal={openModal}
          setModalData={setModalData}
          category="crypto"
          casinos={listCasinos}
        />
        <Dialog
          open={isOpen}
          onClose={handleClose}
          sx={sx}
          fullScreen={fullscreen}
        >
          <CasinoModal data={modalData} onClose={handleClose} />
        </Dialog>
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
