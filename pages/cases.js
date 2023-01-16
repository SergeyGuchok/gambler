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
Here at Thegamblr.com, we promote the best online casinos for case opening gaming. 
With our selection of the most trusted and reliable casinos, you can get 
the best experience for your case opening entertainment. 
Get ready for great bonuses, exciting games, and more! 
Come and join us now and experience the thrill of case opening gaming!`;

export default function Cases({ listCasinos }) {
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
        <title>TheGamblr - Best case opening sites!</title>
      </Head>
      <Box sx={{ height: '270px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="case opening" />
        <Subtitle content={subtitle} />
        <CasinoList
          openModal={openModal}
          setModalData={setModalData}
          category="cases"
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
  const resultList = await axios.get(`${url}/casinos/list/cases`);
  const { data: listData } = resultList.data;

  return {
    props: {
      listCasinos: listData,
    },
  };
}
