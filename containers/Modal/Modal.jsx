import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import CasinoModal from '../../components/CasinoModal';

export default function GlobalModal({ isOpen, onClose, children }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      disableEnforceFocus
      disableAutoFocus
      BackdropProps={{
        timeout: 500,
      }}
    >
      <>
        <Fade in={isOpen} timeout={500}>
          {children}
        </Fade>
      </>
    </Modal>
  );
}
