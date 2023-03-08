import Box from '@mui/material/Box';
import { primaryBlack, primaryWhite } from 'constants/index';
import Typography from 'components/common/Typography';

const wrapperStyles = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
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
