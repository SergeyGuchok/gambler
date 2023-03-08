import React from 'react';
import { adButtonColor, primaryWhite } from 'constants/index';
import Button from '@mui/material/Button';

const sx = {
  width: '100%',
  backgroundColor: adButtonColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: primaryWhite,
  border: `1px solid ${primaryWhite}`,
  borderRadius: '10px',
  padding: '10px 0',
  textTransform: 'none',
  fontSize: '15px',
  lineHeight: '15px',
  boxShadow: 'none',
  fontWeight: '600',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: adButtonColor,
    boxShadow: 'none',
  },
};

function AdButton({ children, ...props }) {
  return (
    <Button sx={sx} {...props} variant="contained">
      {children}
    </Button>
  );
}

export default AdButton;
