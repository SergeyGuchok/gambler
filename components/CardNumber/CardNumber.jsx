import React from 'react';
import { Box } from '@mui/material';
import {
  numberOneColor,
  numberTwoColor,
  numberThreeColor,
  defaultNumberColor,
  primaryWhite,
} from 'constants/index';

const NUMBER_TO_COLOR_MAPPER = {
  1: numberOneColor,
  2: numberTwoColor,
  3: numberThreeColor,
};

const sx = {
  position: 'absolute',
  top: 30,
  left: 30,
  width: 60,
  height: 60,
  borderRadius: '10px',
  fontSize: '25px',
  display: 'flex',
  fontWeight: 600,
  alignItems: 'center',
  justifyContent: 'center',
  color: primaryWhite,
  zIndex: 2,
};

export default function CardNumber({ number }) {
  return (
    <Box
      sx={{
        ...sx,
        backgroundColor: NUMBER_TO_COLOR_MAPPER[number] || defaultNumberColor,
      }}
    >
      {number}
    </Box>
  );
}
