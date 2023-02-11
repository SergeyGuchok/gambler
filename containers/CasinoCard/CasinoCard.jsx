import React, { useState } from 'react';
import Link from 'next/link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from 'components/Typography';
import CardNumber from 'components/CardNumber';
import Row from 'components/Row';
import CasinoImage from 'components/CasinoImage';
import Column from 'components/Column';
import {
  primaryWhite,
  navMenuItem,
  TYPE_PRIMARY,
  TYPE_SECONDARY,
} from 'constants/index';
import Button from 'components/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import VerticalContent from './VerticalContent';
import HorizontalContent from './HorizontalContent';

const sxColumn = {
  padding: '30px',
  width: '100%',
  position: 'relative',
  boxShadow: '0px 25px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: '30px',
  backgroundColor: primaryWhite,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 0,
};

const sxRow = {
  justifyContent: 'space-between',
};

const sxWrapper = (theme) => ({
  backgroundColor: primaryWhite,
  boxShadow: '0px 25px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: '30px',
  position: 'relative',
  padding: '30px 30px 30px 110px',
  zIndex: 0,

  [theme.breakpoints.down('lg')]: {
    padding: '30px',
  },
});

const depositBenefitsButtonStyles = {
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  fontWeight: 600,
  color: navMenuItem,
  '.dot-icon': {
    marginLeft: '5px',
    color: navMenuItem,
  },
};

export default function CasinoCard({
  type = 'vertical',
  pros = [],
  imageSrc = '',
  mainCategory = 'Crypto',
  payoutTime = [],
  refLink,
  winRate,
  paymentOptions = [],
  index,
  name,
}) {
  const isLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [flipped, setFlipped] = useState(false);

  const link = refLink.includes('https://') ? refLink : `https://${refLink}`;

  if (type === 'vertical') {
    return (
      <Column sx={sxColumn}>
        <CardNumber number={index} />
        <CasinoImage imageSrc={imageSrc} />
        <VerticalContent
          flipped={flipped}
          payoutTime={payoutTime}
          mainCategory={mainCategory}
          paymentOptions={paymentOptions}
          pros={pros}
          winRate={winRate}
        />

        <Typography
          sx={{
            marginBottom: '60px',
            marginTop: '5px',
            ...depositBenefitsButtonStyles,
          }}
          onClick={() => setFlipped(!flipped)}
        >
          {flipped ? 'Show deposit options' : 'Show casino benefits'}
          <MoreHorizIcon className="dot-icon" />
        </Typography>
        <a
          style={{ width: '100%' }}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <Button type={TYPE_PRIMARY}>Play now</Button>
        </a>
        <Link href={`/casino/${name}`} style={{ width: '100%' }}>
          <Button type={TYPE_SECONDARY} style={{ marginTop: '10px' }}>
            Read more
          </Button>
        </Link>
      </Column>
    );
  }

  return (
    <Box sx={sxWrapper}>
      <Row sx={sxRow}>
        <CardNumber number={index} />
        <CasinoImage isRow imageSrc={imageSrc} />
        <HorizontalContent
          flipped={flipped}
          payoutTime={payoutTime}
          mainCategory={mainCategory}
          paymentOptions={paymentOptions}
          pros={pros}
          winRate={winRate}
        />

        {isLg ? (
          <Column sx={{ width: '380px' }}>
            <Typography
              sx={{
                justifyContent: 'center',
                marginBottom: '25px',
                ...depositBenefitsButtonStyles,
              }}
              onClick={() => setFlipped(!flipped)}
            >
              {flipped ? 'Show deposit options' : 'Show casino benefits'}
              <MoreHorizIcon className="dot-icon" />
            </Typography>
            <a href={link} target="_blank" rel="noreferrer">
              <Button type={TYPE_PRIMARY}>Play now</Button>
            </a>
            <Link href={`/casino/${name}`} style={{ width: '100%' }}>
              <Button type={TYPE_SECONDARY} style={{ marginTop: '10px' }}>
                Read more
              </Button>
            </Link>
          </Column>
        ) : null}
      </Row>
      {!isLg ? (
        <Column>
          <Typography
            sx={{
              justifyContent: 'center',
              marginBottom: '30px',
              marginTop: '35px',
              ...depositBenefitsButtonStyles,
            }}
            onClick={() => setFlipped(!flipped)}
          >
            {flipped ? 'Show deposit options' : 'Show casino benefits'}
            <MoreHorizIcon className="dot-icon" />
          </Typography>
          <a href={link} target="_blank" rel="noreferrer">
            <Button type={TYPE_PRIMARY}>Play now</Button>
          </a>
          <Link href={`/casino/${name}`} style={{ width: '100%' }}>
            <Button type={TYPE_SECONDARY} style={{ marginTop: '10px' }}>
              Read more
            </Button>
          </Link>
        </Column>
      ) : null}
    </Box>
  );
}
