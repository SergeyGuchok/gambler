import Box from '@mui/material/Box';
import { primaryBlack, primaryGrey, primaryWhite } from '../../constants';
import Typography from 'components/common/Typography';

const wrapperStyles = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  position: 'relative',
  padding: '20px',
  zIndex: 0,
});

const sxTitle = {
  color: primaryGrey,
  fontSize: '25px',
  lineHeight: '25px',
};

const sxSubtitle = {
  color: primaryBlack,
  fontSize: '25px',
  lineHeight: '25px',
  marginTop: '10px',
};

export default function BonusBlock({ bonus }) {
  return (
    <Box sx={wrapperStyles}>
      <Typography sx={sxTitle}>Welcome bonus</Typography>
      <Typography sx={sxSubtitle}>{bonus}</Typography>
    </Box>
  );
}
