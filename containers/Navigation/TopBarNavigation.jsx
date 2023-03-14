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
  boxShadow:
    '0px 2px 2px -1px rgb(0 0 0 / 15%), 0px 2px 3px 0px rgb(0 0 0 / 10%), 0px 1px 4px 0px rgb(0 0 0 / 8%)',
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
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
    ? PROD_URL
    : 'http://localhost:3000';

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
          <Link href={`${url}/`} aria-label="link">
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
              link={`${url}/casinos/best`}
              items={[
                {
                  title: 'Best Casinos',
                  href: `${url}/casinos/best`,
                },
                {
                  title: 'Fast Withdrawal Casinos',
                  href: `${url}/casinos/fast`,
                },
                {
                  title: 'Sports Betting',
                  href: `${url}/casinos/sports-betting`,
                },
                {
                  title: 'Sign Up Bonuses',
                  href: `${url}/casinos/bonuses`,
                },
                {
                  title: 'Crypto Casinos',
                  href: `${url}/crypto`,
                },
                {
                  title: 'Real Money Casinos',
                  href: `${url}/money`,
                },
                {
                  title: 'Case Openings',
                  href: `${url}/cases`,
                },
                {
                  title: 'Skins Casinos',
                  href: `${url}/skins`,
                },
                { title: 'All Casinos', href: `${url}/` },
              ]}
            >
              Casinos
            </LinkWithDropdown>
            <LinkWithDropdown
              link={`${url}/slots/review`}
              items={[
                {
                  title: 'All Slot Reviews',
                  href: `${url}/slots/review`,
                },
                {
                  title: 'Most Popular Slot Reviews',
                  href: `${url}/slots/most-popular`,
                },
                {
                  title: 'Upcoming Slots',
                  href: `${url}/slots/coming-soon`,
                },
                {
                  title: 'New Slots',
                  href: `${url}/slots/new`,
                },
                {
                  title: 'Bonus Buy Slots',
                  href: `${url}/slots/bonus-buy`,
                },
                {
                  title: 'Best RTP Slots',
                  href: `${url}/slots/best-rtp`,
                },
                {
                  title: 'Unique Features Slots',
                  href: `${url}/slots/unique-features`,
                },
              ]}
            >
              Slots
            </LinkWithDropdown>
            <LinkWithDropdown
              link={`${url}/game-developers/review`}
              items={[
                {
                  title: 'All Game Developers',
                  href: `${url}/game-developers/review`,
                },
                {
                  title: 'Most Popular Game Developers',
                  href: `${url}/game-developers/popular`,
                },
              ]}
            >
              Game Developers
            </LinkWithDropdown>
            <LinkWithDropdown link={`${url}/skins`}>
              Skins gambling
            </LinkWithDropdown>
            <LinkWithDropdown link={`${url}/cases`}>
              Case openings
            </LinkWithDropdown>
            <LinkWithDropdown link={`${url}/`}>Reviews</LinkWithDropdown>
            <LinkWithDropdown link={`${url}/`}>Guides</LinkWithDropdown>
            <LinkWithDropdown link={`${url}/`}>Feedback</LinkWithDropdown>
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
