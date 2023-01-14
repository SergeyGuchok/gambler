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
Are you looking for the best skins casino sites? Look no further! Our 
site offers a comprehensive list of the highest quality skins 
casino sites on the web. We provide detailed reviews and ratings
to help you make the best choice. With us, you can rest 
assured that you’ll find the perfect skins casino site for you! Try us today!`

export default function Skins({ listCasinos }) {
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
        <title>TheGamblr - Best skins gambling casinos!</title>
      </Head>
      <Column sx={{ justifyContent: 'center', marginTop: '150px' }}>
        <Title content="skins gambling" />
        <Subtitle content={subtitle} />
        <CasinoList openModal={openModal} setModalData={setModalData} category="skins" casinos={listCasinos} />
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
  const resultList = await axios.get(`${url}/casinos/list/skins`)
  const { data: listData } = resultList.data

  return {
    props: {
      listCasinos: listData,
    }
  }
}

