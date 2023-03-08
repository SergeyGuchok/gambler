import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

const sx = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
};

const sxRow = (theme) => ({
  ...sx,
  height: 190,
  maxWidth: 190,

  [theme.breakpoints.down('lg')]: {
    marginLeft: '60px',
    marginRight: '20px',
  },
});

const sxColumn = {
  ...sx,
  height: 300,
  maxWidth: 300,
};

const sxAd = {
  ...sx,
  height: 200,
};

export default function CasinoImage({
  isRow = false,
  imageSrc = '',
  isAd = false,
}) {
  const wrapperSx = isAd ? sxAd : isRow ? sxRow : sxColumn;
  return (
    <Box sx={wrapperSx}>
      <Image
        src={imageSrc}
        alt="Casino Logo"
        style={{ objectFit: 'contain' }}
        fill
      />
    </Box>
  );
}
