import { useCallback, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Modal from 'containers/Modal';

import Column from 'components/Column';
import CasinoModal from 'components/CasinoModal';
import CasinoList from 'containers/CasinoList';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import { disableScroll, enableScroll } from 'utils';
import { API_URL } from 'constants/index';

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
    enableScroll();
    setIsOpen(false);
    setModalData({});
  }, [setModalData, setIsOpen]);

  const openModal = () => {
    disableScroll();
    setIsOpen(true);
  };

  return (
    <>
      <Head>
        <title>TheGamblr - Best cypto gamlbing sites!</title>
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
        <Modal isOpen={isOpen} onClose={handleClose}>
          <CasinoModal data={modalData} onClose={handleClose} />
        </Modal>
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
