import Box from '@mui/material/Box';
import { primaryBlack, primaryGrey, primaryWhite } from '../../constants';
import Typography from 'components/common/Typography';

const wrapperStyles = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
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
