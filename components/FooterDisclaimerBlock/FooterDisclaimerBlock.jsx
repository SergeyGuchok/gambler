import Box from '@mui/material/Box';
import Column from 'components/Column';
import { primaryBlack, primaryGrey, secondaryGrey } from 'constants/index';
import Typography from 'components/Typography';

const titleStyles = {
  fontSize: '25px',
  color: primaryBlack,
  textAlign: 'center',
  marginBottom: '20px',
  fontWeight: 600,
};

const subTitleStyles = {
  fontSize: '20px',
  color: primaryGrey,
  textAlign: 'center',
};

export default function FooterDisclaimerBlock({ title, content }) {
  return (
    <Column>
      <Typography sx={titleStyles}>{title}</Typography>
      <Typography sx={subTitleStyles}>{content}</Typography>
    </Column>
  );
}
