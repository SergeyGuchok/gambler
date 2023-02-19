import Box from '@mui/material/Box';
import { primaryBlack, primaryWhite } from 'constants/index';
import Typography from 'components/common/Typography';

const wrapperStyles = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow: '0px 25px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: '30px',
  position: 'relative',
  padding: '30px',
  zIndex: 0,
});

const sxText = {
  fontSize: '15px',
  lineHeight: '25px',
  color: primaryBlack,
  marginBottom: '20px',
  '&:last-of-type': {
    marginBottom: '0',
  },
};

export default function TextBlock({ textArray, variant = 'body2' }) {
  return (
    <Box sx={wrapperStyles}>
      {textArray.map((t, i) => (
        <Typography sx={sxText} key={i + t} variant={variant}>
          {t}
        </Typography>
      ))}
    </Box>
  );
}
