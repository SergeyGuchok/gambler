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
import { API_URL } from 'constants/index';
import { enableScroll, disableScroll } from 'utils';

const subtitle = `
Welcome to our site! We promote only the best real money casino sites that offer the 
highest quality online gaming experience. 
Our selection of top-tier casino sites feature the best selection of games, 
generous bonuses and promotions, and secure, reliable payment methods. 
Sign up today and start winning real money!`;

export default function Money({ listCasinos }) {
  const [modalData, setModalData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    enableScroll();
    setIsOpen(false);
    setModalData({});
  }, [setModalData, setIsOpen]);

  const openModal = useCallback(() => {
    disableScroll();
    setIsOpen(true);
  }, [setIsOpen]);

  return (
    <>
      <Head>
        <title>TheGamblr - Best real money gambling casinos!</title>
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
  const resultList = await axios.get(`${url}/casinos/list/money`);
  const { data: listData } = resultList.data;

  return {
    props: {
      listCasinos: listData,
    },
  };
}
