import React from 'react';
import Image from 'next/image'
import { Box } from '@mui/material';

const sx = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const sxRow = {
  ...sx,
  height: 190,
  width: 190,
  position: 'relative',
};

const sxColumn = {
  ...sx,
  height: 300,
  width: 300,
  position: 'relative',
};

export default function CasinoImage({ isRow = false, imageSrc = '' }) {
  return (
    <Box sx={isRow ? sxRow : sxColumn}>
      <Image
        src={imageSrc} alt="Casino Logo"
        style={{ objectFit: 'contain' }}
        fill
      />
    </Box>
  );
}
