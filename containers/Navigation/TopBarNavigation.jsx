import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Row from 'components/common/Row';
import Icon from 'components/common/Icon';
import Typography from 'components/common/Typography';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './MobileMenu';
import LinkWithDropdown from './LinkWithDropdown';
import { PROD_URL, navBarBackgroundColor } from 'constants/index';

const logoStyles = {
  display: 'flex',
  alignItems: 'center',
};

const sxFixed = {
  boxShadow: '0 0 1px black',
};

const sxModalWrapper = {
  '.MuiDialog-paper': {
    margin: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderRadius: '0px 0px 30px 30px',
    maxWidth: '100%',
  },
};

const url =
  process.env.ENVIRONMENT === 'production' ? PROD_URL : 'http://localhost:3000';

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

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '120px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
        backgroundColor: navBarBackgroundColor,
        ...sx,
      })}
    >
      <Container sx={{ height: '100%', width: '100%' }} maxWidth="xl">
        <Row sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" aria-label="link">
            <Typography sx={logoStyles}>
              <Icon
                name="logo"
                sx={{
                  height: 50,
                  width: 'auto',
                  marginTop: '-5px',
                }}
              />
            </Typography>
          </Link>
          <Box
            sx={(theme) => ({
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              marginLeft: '75px',
              [theme.breakpoints.down('lg')]: {
                display: 'none',
              },
            })}
          >
            <LinkWithDropdown
              link={`${url}/crypto`}
              items={[
                {
                  title: 'Best Casinos',
                  href: `${url}/crypto/best`,
                },
                {
                  title: 'Sports Betting',
                  href: `${url}/crypto/sports-betting`,
                },
                {
                  title: 'Fast Withdrawal Casinos',
                  href: `${url}/crypto/fast`,
                },
                {
                  title: 'Sign Up Bonuses',
                  href: `${url}/crypto/bonuses`,
                },
                { title: 'All', href: `${url}/crypto` },
              ]}
            >
              Crypto gambling
            </LinkWithDropdown>
            <LinkWithDropdown
              link="/money"
              items={[
                {
                  title: 'Best Casinos',
                  href: `${url}/money/best`,
                },
                {
                  title: 'Sports Betting',
                  href: `${url}/money/sports-betting`,
                },
                {
                  title: 'Fast Withdrawal Casinos',
                  href: `${url}/money/fast`,
                },
                {
                  title: 'Sign Up Bonuses',
                  href: `${url}/money/bonuses`,
                },
                { title: 'All', href: `${url}/money` },
              ]}
            >
              Real money gambling
            </LinkWithDropdown>
            <LinkWithDropdown link="/skins">Skins gambling</LinkWithDropdown>
            <LinkWithDropdown link="/cases">Case openings</LinkWithDropdown>
            <LinkWithDropdown link="/">Reviews</LinkWithDropdown>
            <LinkWithDropdown link="/">Guides</LinkWithDropdown>
            <LinkWithDropdown link="/">Feedback</LinkWithDropdown>
          </Box>
          <Box
            sx={(theme) => ({
              display: 'none',
              [theme.breakpoints.down('lg')]: {
                display: 'block',
              },
            })}
          >
            <MenuIcon onClick={onOpen} />
          </Box>
        </Row>
      </Container>
      <Dialog onClose={onClose} open={isOpen} sx={sxModalWrapper}>
        <MobileMenu onClose={onClose} />
      </Dialog>
    </Box>
  );
}
