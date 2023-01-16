import React from 'react';
import { Typography } from '@mui/material';

export default function CustomTypography({ children, ...props }) {
  return (
    <Typography {...props} lineHeight={1.2}>
      {children}
    </Typography>
  );
}
