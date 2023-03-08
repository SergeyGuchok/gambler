import Box from '@mui/material/Box';
import { primaryBlack, primaryWhite } from 'constants/index';
import CasinoAdBlock from 'containers/CasinoAdBlock';
import Typography from 'components/common/Typography';

const wrapperSx = {
  backgroundColor: primaryWhite,
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  borderRadius: '30px',
  position: 'relative',
  padding: '10px 20px',
  zIndex: 0,
};

const titleSx = {
  fontSize: '20px',
  color: primaryBlack,
  margin: '10px 0',
  fontWeight: 600,
  textAlign: 'center',
};

export default function CasinoAdsPanel({ ads }) {
  return (
    <Box sx={wrapperSx}>
      <Typography sx={titleSx}>💎Best Casino Offerings</Typography>
      {ads.map((casino) => (
        <CasinoAdBlock key={casino.name} casino={casino} />
      ))}
    </Box>
  );
}
