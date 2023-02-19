import React from 'react';
import Column from 'components/common/Column';
import Typography from 'components/common/Typography';
import ErrorOutlined from '@mui/icons-material/ErrorOutline';
import { warningBackground, warningText } from 'constants/index';

const disclaimerBlockStyles = {
  backgroundColor: warningBackground,
  marginTop: '85px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px 0 60px',
};

const disclaimerTitleStyles = {
  color: warningText,
  fontWeight: 700,
  marginBottom: '25px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '30px',
};

const disclaimerTextStyles = {
  color: warningText,
  maxWidth: 860,
  textAlign: 'center',
  fontSize: '15px',
  lineHeight: '20px',
};

export default function Disclaimer() {
  return (
    <Column sx={disclaimerBlockStyles}>
      <Typography sx={disclaimerTitleStyles}>
        <ErrorOutlined sx={{ marginRight: '10px', fontWeight: '30px' }} />{' '}
        Disclaimer
      </Typography>
      <Typography sx={disclaimerTextStyles}>
        Online gambling laws differ in each country around the world and are
        subject to change. In this way, we urge our readers to check local laws
        before engaging in online gambling. We do not condone gambling in
        jurisdictions where it is not permitted. Casino.org is not a gambling
        operator, no gambling facilities are offered on this site. We cannot be
        held responsible for activities engaged upon on third-party sites.
      </Typography>
    </Column>
  );
}
