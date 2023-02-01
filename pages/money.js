import { useCallback, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Column from 'components/Column';
import CasinoModal from 'components/CasinoModal';
import CasinoList from 'containers/CasinoList';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import { API_URL } from 'constants/index';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const subtitle = `
Welcome to our site! We promote only the best real money casino sites that offer the 
highest quality online gaming experience. 
Our selection of top-tier casino sites feature the best selection of games, 
generous bonuses and promotions, and secure, reliable payment methods. 
Sign up today and start winning real money!`;

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
export default function Money({ listCasinos }) {
  const [modalData, setModalData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setModalData(null);
  }, [setModalData, setIsOpen]);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Head>
        <title>TheGamblr - Best real money gambling casinos!</title>
        <meta
          name="description"
          content="Find the best real money gambling casinos with our reviews and information. Play your favorite games and win big!"
        />
      </Head>
      <Box sx={{ height: '270px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="money gambling" />
        <Subtitle content={subtitle} />
        <CasinoList
          openModal={openModal}
          setModalData={setModalData}
          category="money"
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
  const resultList = await axios.get(`${url}/casinos/list/money`);
  const { data: listData } = resultList.data;

  return {
    props: {
      listCasinos: listData,
    },
  };
}
