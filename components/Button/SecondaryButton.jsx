import React from 'react';
import { primaryGrey } from 'constants/index';
import Button from '@mui/material/Button';

const sx = {
  width: '100%',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: primaryGrey,
  border: `1px solid ${primaryGrey}`,
  borderRadius: '10px',
  padding: '15px 0',
  textTransform: 'none',
  fontSize: '25px',
  lineHeight: '30px',
  boxShadow: 'none',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },

  '& > *': {
    fontSize: '25px',
  },
};

function SecondaryButton({ children, ...props }) {
  return (
    <Button sx={sx} {...props} variant="contained">
      {children}
    </Button>
  );
}

export default SecondaryButton;
