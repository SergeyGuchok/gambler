import { useState } from 'react'
import Head from 'next/head'
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import axios from 'axios';

import Column from 'components/Column';
import CasinoModal from 'components/CasinoModal';
import CasinoList from 'containers/CasinoList';
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import { API_URL } from 'constants/index';

const subtitle = `
Welcome to our site! We promote only the best real money casino sites that offer the 
highest quality online gaming experience. 
Our selection of top-tier casino sites feature the best selection of games, 
generous bonuses and promotions, and secure, reliable payment methods. 
Sign up today and start winning real money!`

export default function Money({ listCasinos }) {
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
        <title>TheGamblr - Best real money gambling casinos!</title>
      </Head>
      <Column sx={{ justifyContent: 'center', marginTop: '150px' }}>
        <Title content="money gambling" />
        <Subtitle content={subtitle} />
        <CasinoList openModal={openModal} setModalData={setModalData} category="money" casinos={listCasinos} />
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
  const resultList = await axios.get(`${url}/casinos/list/money`)
  const { data: listData } = resultList.data

  return {
    props: {
      listCasinos: listData,
    }
  }
}

