import React from 'react';
import Typography from 'components/Typography';
import Column from 'components/Column';
import { primaryGrey, primaryBlack } from 'constants/index';

export default function TitleSubtitle({ title, subtitle }) {
  return (
    <Column>
      <Typography color={primaryGrey} fontSize="15px" fontWeight={600}>{title}</Typography>
      <Typography color={primaryBlack} fontSize="25px" fontWeight={600}>{subtitle}</Typography>
    </Column>
  );
}
