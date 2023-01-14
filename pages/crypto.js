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
Are you ready to win big? Check out crypto section and explore the best casinos around the world. 
With unbeatable bonuses, fantastic games, and world-class customer service, 
we promise to deliver a unique gaming experience that you won't 
find anywhere else. Start your journey today and join the 
millions of satisfied players who have already won big!`

export default function Crypto({ listCasinos }) {
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
        <title>TheGamblr - Best cypto gamlbing sites!</title>
      </Head>
      <Column sx={{ justifyContent: 'center', marginTop: '150px' }}>
        <Title content="crypto gambling" />
        <Subtitle content={subtitle} />
        <CasinoList openModal={openModal} setModalData={setModalData} category="crypto" casinos={listCasinos} />
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
  const resultList = await axios.get(`${url}/casinos/list/crypto`)
  const { data: listData } = resultList.data

  return {
    props: {
      listCasinos: listData,
    }
  }
}


