import { useState, useEffect } from 'react'
import Head from 'next/head'
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import Column from 'components/Column';
import CasinoModal from 'components/CasinoModal';

import CasinoList from 'containers/CasinoList';

// page components
import Subtitle from 'components/HomePage/Subtitle';
import Title from 'components/HomePage/Title';
import TopCasinos from 'components/HomePage/TopCasinos';
import Disclaimer from 'components/HomePage/Disclaimer';

export default function Home() {
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
        <title>TheGamblr - Best casinos to your choice!</title>
      </Head>
      <Column sx={{ justifyContent: 'center', marginTop: '150px' }}>
        <Title />
        <Subtitle />
        <CasinoList openModal={openModal} setModalData={setModalData} category="crypto" />
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
