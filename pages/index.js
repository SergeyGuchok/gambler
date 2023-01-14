import { useState, useEffect } from 'react'
import Head from 'next/head'
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import Column from 'components/Column';
import CasinoModal from 'components/CasinoModal';

import CasinoList from 'containers/CasinoList';
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'

// page components
import TopCasinos from 'components/HomePage/TopCasinos';
import Disclaimer from 'components/HomePage/Disclaimer';
import axios from 'axios';
import { API_URL } from 'constants/index';

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
`

export default function Home({ listCasinos, topCasinos }) {
  const [modalData, setModalData] = useState({});
  const [modalActive, setModalActive] = useState(false);

  const handleClose = () => {
    setModalActive(false);
    setModalData({});
  };

  const openModal = () => {
    setModalActive(true);
  };

  return (
    <>
      <Head>
        <title>TheGamblr - Best online casinos to your choice!</title>
      </Head>
      <Column sx={{ justifyContent: 'center', marginTop: '150px' }}>
        <Title content="online gambling" />
        <Subtitle content={subtitle} />
        <TopCasinos openModal={openModal} setModalData={setModalData} casinos={topCasinos} />
        <Disclaimer />
        <CasinoList openModal={openModal} setModalData={setModalData} isHomePage casinos={listCasinos} />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalActive}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          disableEnforceFocus
          disableAutoFocus
          BackdropProps={{
            timeout: 500,
          }}
        >
          <>
            <Fade in={modalActive} timeout={500}>
              <CasinoModal data={modalData} onClose={handleClose} />
            </Fade>
          </>
        </Modal>
      </Column>
    </>
  )
}

export async function getServerSideProps () {
  const url = process.env.ENVIRONMENT === 'production' ? API_URL : 'http://localhost:3000/api'
  const resultTop = await axios.get(`${url}/casinos`)
  const resultList = await axios.get(`${url}/casinos/list`)
  const { data: topData } = resultTop.data
  const { data: listData } = resultList.data

  return {
    props: {
      listCasinos: listData,
      topCasinos: topData,
    }
  }
}
