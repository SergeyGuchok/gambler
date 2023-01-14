import React from 'react';
import Typography from 'components/Typography';
import { primaryGrey } from 'constants/index';

const subtitleStyles = {
  maxWidth: 820,
  textAlign: 'center',
  margin: '0 auto',
  fontSize: 20,
  color: primaryGrey,
  marginTop: '30px',
  lineHeight: '30px',
};

export default function Subtitle({ content }) {
  return (
    <Typography sx={subtitleStyles} variant="h2">
      {content}
    </Typography>
  );
}
