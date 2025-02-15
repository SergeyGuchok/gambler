import Box from '@mui/material/Box';
import Image from 'next/image';
import Row from 'components/common/Row';
import Column from 'components/common/Column';
import Button from 'components/common/Button';
import React from 'react';
import Typography from 'components/common/Typography';
import {
  primaryBlack,
  primaryGrey,
  PROD_URL,
  TYPE_PRIMARY,
} from 'constants/index';
import Link from 'next/link';

const wrapperStyles = {
  maxHeight: '80px',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '20px',
  border: '1px solid #F4F4F4',
  padding: '0 20px',
  margin: '10px 0',
};

const imageWrapperStyles = {
  width: '80px',
  height: '80px',
  position: 'relative',
};

const casinoNameStyles = {
  fontSize: '22px',
  fontWeight: '600',
  color: primaryBlack,
  lineHeight: '25px',
  textAlign: 'center',
};

const bonusStyles = {
  fontSize: '14px',
  marginTop: '5px',
  color: primaryGrey,
  lineHeight: '15px',
  textAlign: 'center',
};

const url =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
    ? PROD_URL
    : 'http://localhost:3000';

export default function CasinoAdBlock({ casino }) {
  const { name, imageSrc, bonus, displayName } = casino;

  return (
    <Row sx={wrapperStyles}>
      <Box sx={imageWrapperStyles}>
        <Image
          src={imageSrc}
          alt="Casino Logo"
          style={{ objectFit: 'contain' }}
          fill
        />
      </Box>
      <Column sx={{ alignItems: 'center', margin: '0 5px' }}>
        <Typography sx={casinoNameStyles}>{displayName}</Typography>
        <Typography sx={bonusStyles}>{bonus}</Typography>
      </Column>
      <Box sx={{ maxWidth: '140px', width: '100%' }}>
        <Link href={`${url}/casino/${name}`}>
          <Button type={TYPE_PRIMARY} extraSx={{ fontSize: '14px' }} hideArrow>
            Read Review
          </Button>
        </Link>
      </Box>
    </Row>
  );
}
