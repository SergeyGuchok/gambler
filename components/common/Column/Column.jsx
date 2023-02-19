import React from 'react';
import Box from '@mui/material/Box';

export default function Column({ children, sx = {}, ...props }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
