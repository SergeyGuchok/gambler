import React from 'react';
import Typography from 'components/common/Typography';
import Column from 'components/common/Column';
import { primaryGrey, primaryBlack } from 'constants/index';

const titleSx = (theme) => ({
  fontWeight: 600,
  fontSize: '15px',
  color: primaryGrey,

  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
});

const subtitleSx = (theme) => ({
  fontWeight: 600,
  fontSize: '25px',
  color: primaryBlack,

  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
});

export default function TitleSubtitle({ title, subtitle }) {
  return (
    <Column>
      <Typography sx={titleSx}>{title}</Typography>
      <Typography sx={subtitleSx}>{subtitle}</Typography>
    </Column>
  );
}
