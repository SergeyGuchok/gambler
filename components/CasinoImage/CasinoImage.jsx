import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

const sx = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const sxRow = (theme) => ({
  ...sx,
  height: 190,
  maxWidth: 190,
  width: '100%',
  position: 'relative',

  [theme.breakpoints.down('lg')]: {
    marginLeft: '60px',
    marginRight: '20px',
  },
});

const sxColumn = {
  ...sx,
  height: 300,
  maxWidth: 300,
  width: '100%',
  position: 'relative',
};

export default function CasinoImage({ isRow = false, imageSrc = '' }) {
  return (
    <Box sx={isRow ? sxRow : sxColumn}>
      <Image
        src={imageSrc}
        alt="Casino Logo"
        style={{ objectFit: 'contain' }}
        fill
      />
    </Box>
  );
}
