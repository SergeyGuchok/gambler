import React from 'react';
import Box from '@mui/material/Box';

export default function Row({ children, sx = {}, ...props }) {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'row', width: '100%', height: '100%', ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
