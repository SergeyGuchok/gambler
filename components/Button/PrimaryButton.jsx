import React from 'react';
import { primaryBlack, primaryWhite } from 'constants/index';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const sx = {
  width: '100%',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  color: primaryWhite,
  borderRadius: '10px',
  border: 'none',
  overflow: 'hidden',
  fontWeight: 600,
  padding: '15px 0',
  lineHeight: '30px',
  fontSize: '25px',
  textTransform: 'none',

  '& .right-arrow': {
    transform: 'translateX(5px)',
    transition: '0.4s transform',
  },

  '&::before': {
    content: "''",
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    background: primaryBlack,
    transition: '0.4s opacity',
  },

  '&::after': {
    content: "''",
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundImage:
      'linear-gradient(300deg, rgba(255,0,0,1) 0%, rgba(250,0,255,1) 45.31%, rgba(255,194,43,1) 100%)',
    zIndex: -2,
    transition: '0.2s left linear',
    borderRadius: '10px',
  },

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },

  '&:hover::before': {
    opacity: 0,
  },

  '&:hover .right-arrow': {
    transform: 'translateX(15px)',
  },
};

function PrimaryButton({ children, ...props }) {
  return (
    <Button {...props} sx={sx} variant="contained">
      {children}
      <ArrowRightAltIcon fontSize="large" className="right-arrow" />
    </Button>
  );
}

export default PrimaryButton;
