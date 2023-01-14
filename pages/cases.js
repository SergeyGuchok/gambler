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
Here at Thegamblr.com, we promote the best online casinos for case opening gaming. 
With our selection of the most trusted and reliable casinos, you can get 
the best experience for your case opening entertainment. 
Get ready for great bonuses, exciting games, and more! 
Come and join us now and experience the thrill of case opening gaming!`

export default function Cases({ listCasinos }) {
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
        <title>TheGamblr - Best case opening sites!</title>
      </Head>
      <Column sx={{ justifyContent: 'center', marginTop: '150px' }}>
        <Title content="case opening" />
        <Subtitle content={subtitle} />
        <CasinoList openModal={openModal} setModalData={setModalData} category="cases" casinos={listCasinos} />
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
  const resultList = await axios.get(`${url}/casinos/list/cases`)
  const { data: listData } = resultList.data

  return {
    props: {
      listCasinos: listData,
    }
  }
}

