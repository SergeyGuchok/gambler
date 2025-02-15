import React from 'react';
import Typography from 'components/common/Typography';

const titleStyles = (theme) => ({
  textAlign: 'center',
  fontWeight: 900,
  fontSize: 60,
  letterSpacing: '-0.5px',

  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
  },
});

const gradientTextStyles = (theme) => ({
  display: 'inline',
  fontSize: '60px',
  fontWeight: 900,
  background:
    'linear-gradient(300deg, rgba(255,0,0,1) 0%, rgba(250,0,255,1) 45.31%, rgba(255,194,43,1) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',

  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
  },
});

export default function Title({ content }) {
  return (
    <Typography variant="h1" sx={titleStyles}>
      The best <Typography sx={gradientTextStyles}>{content}</Typography>{' '}
      casinos for 2023
    </Typography>
  );
}
