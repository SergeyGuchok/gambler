import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Row from 'components/Row';
import Icon from 'components/Icon';
import Typography from 'components/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Modal from 'containers/Modal';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';
import {
  navMenuItem,
  navMenuItemActive,
  navBarBackgroundColor,
} from 'constants/index';

const linkStyles = {
  display: 'flex',
  alignItems: 'center',
  color: navMenuItem,
  transition: '0.2s color',

  '&:hover': {
    color: navMenuItemActive,
  },
};

const logoStyles = {
  display: 'flex',
  alignItems: 'center',
};

const sxFixed = {
  boxShadow: '0 0 1px black',
};

export default function TopBarNavigation() {
  const [isApply, setIsApply] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    const html = document.querySelector('html');
    html.style.overflowY = 'auto';
    setIsOpen(false);
  };

  const onOpen = () => {
    const html = document.querySelector('html');
    html.style.overflowY = 'hidden';
    setIsOpen(true);
  };

  const onScroll = () => {
    window.scrollY > 50 ? setIsApply(true) : setIsApply(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const sx = isApply ? sxFixed : {};
  const isMd = useMediaQuery('(max-width: 1200px');

  return (
    <Row
      sx={{
        height: '120px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
        backgroundColor: navBarBackgroundColor,
        ...sx,
      }}
    >
      <Container sx={{ height: '100%', width: '100%' }} maxWidth="xl">
        <Row sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/">
            <Typography sx={logoStyles}>
              <Icon
                name="logo"
                sx={{
                  marginRight: '10px',
                  height: 80,
                  width: 'auto',
                  marginTop: '-3px',
                }}
              />
            </Typography>
          </Link>
          {!isMd ? (
            <>
              <Link href="/crypto">
                <Typography sx={linkStyles}>Crypto gambling</Typography>
              </Link>
              <Link href="/money">
                <Typography sx={linkStyles}>Real money gambling</Typography>
              </Link>
              <Link href="/skins">
                <Typography sx={linkStyles}>Skins gambling</Typography>
              </Link>
              <Link href="/cases">
                <Typography sx={linkStyles}>Case openings</Typography>
              </Link>
              <Link href="/">
                <Typography sx={linkStyles}>Reviews</Typography>
              </Link>
              <Link href="/">
                <Typography sx={linkStyles}>Guides</Typography>
              </Link>
              <Link href="/">
                <Typography sx={linkStyles}>Feedback</Typography>
              </Link>
            </>
          ) : (
            <MenuIcon onClick={onOpen} />
          )}
        </Row>
      </Container>
      <Modal onClose={onClose} isOpen={isOpen}>
        <Box>
          <MobileMenu onClose={onClose} />
        </Box>
      </Modal>
    </Row>
  );
}
