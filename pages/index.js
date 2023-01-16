import { useState, useCallback } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import axios from 'axios';
import { API_URL } from 'constants/index';

import Column from 'components/Column';
import CasinoModal from 'components/CasinoModal';

import Modal from 'containers/Modal';
import CasinoList from 'containers/CasinoList';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import { enableScroll, disableScroll } from 'utils';

// page components
import TopCasinos from 'components/HomePage/TopCasinos';
import Disclaimer from 'components/HomePage/Disclaimer';

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

export default function Home({ listCasinos, topCasinos }) {
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
        <title>TheGamblr - Best online casinos to your choice!</title>
      </Head>
      <Box sx={{ height: '270px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content="online gambling" />
        <Subtitle content={subtitle} />
        <TopCasinos
          openModal={openModal}
          setModalData={setModalData}
          casinos={topCasinos}
        />
        <Disclaimer />
        <CasinoList
          openModal={openModal}
          setModalData={setModalData}
          isHomePage
          casinos={listCasinos}
        />
        <Modal isOpen={isOpen} onClose={handleClose}>
          <CasinoModal data={modalData} onClose={handleClose} />
        </Modal>
      </Column>
    </>
  );
}

export async function getStaticProps() {
  const url =
    process.env.ENVIRONMENT === 'production'
      ? API_URL
      : 'http://localhost:3000/api';
  const resultTop = await axios.get(`${url}/casinos`);
  const resultList = await axios.get(`${url}/casinos/list`);
  const { data: topData } = resultTop.data;
  const { data: listData } = resultList.data;

  return {
    props: {
      listCasinos: listData,
      topCasinos: topData,
    },
  };
}
