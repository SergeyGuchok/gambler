import React from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link'
import Row from 'components/Row';
import Icon from 'components/Icon';
import { Typography } from '@mui/material';
import { navMenuItem, navMenuItemActive } from 'constants/index';

const linkStyles = {
  display: 'flex',
  alignItems: 'center',
  color: navMenuItem,
  transition: '0.2s color',

  '&:hover': {
    color: navMenuItemActive
  }
}

const logoStyles = {
  display: 'flex',
  alignItems: 'center',
}

export default function TopBarNavigation() {
  return (
    <Row sx={{ height: '120px' }}>
      <Container sx={{ height: '100%' }} maxWidth="xl">
        <Row sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/">
            <Typography sx={logoStyles}>
              <Icon
                name="logo"
                sx={{
                  marginRight: '10px', height: 80, width: 'auto', marginTop: '-3px',
                }}
              />
            </Typography>
          </Link>
          <Link href="/">
            <Typography sx={linkStyles}>Home</Typography>
          </Link>
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
            <Typography sx={linkStyles}>Case openings gambling</Typography>
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
        </Row>
      </Container>
    </Row>
  );
}
