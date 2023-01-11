import React from 'react';
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
};

const sxColumn = {
  ...sx,
  height: 300,
  width: 300,
};

export default function CasinoImage({ isRow = false, imageSrc = '' }) {
  return (
    <Box sx={isRow ? sxRow : sxColumn}>
      <img src={imageSrc} alt="Casino Logo" width="100%" />
    </Box>
  );
}
