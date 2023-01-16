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
Are you looking for the best skins casino sites? Look no further! Our 
site offers a comprehensive list of the highest quality skins 
casino sites on the web. We provide detailed reviews and ratings
to help you make the best choice. With us, you can rest 
assured that you’ll find the perfect skins casino site for you! Try us today!`;

export default function Skins({ listCasinos }) {
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
        <title>TheGamblr - Best skins gambling casinos!</title>
      </Head>
      <Box sx={{ height: '270px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="skins gambling" />
        <Subtitle content={subtitle} />
        <CasinoList
          openModal={openModal}
          setModalData={setModalData}
          category="skins"
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
  const resultList = await axios.get(`${url}/casinos/list/skins`);
  const { data: listData } = resultList.data;

  return {
    props: {
      listCasinos: listData,
    },
  };
}
