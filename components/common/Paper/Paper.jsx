import Box from '@mui/material/Box';
import { primaryWhite } from '../../../constants';

const wrapperStylesBig = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  borderRadius: '30px',
  position: 'relative',
  padding: '30px',
  zIndex: 0,
});

const wrapperStylesSmall = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  position: 'relative',
  padding: '20px',
  zIndex: 0,
});

export default function Paper({ children, isSmall = false }) {
  return (
    <Box sx={isSmall ? wrapperStylesSmall : wrapperStylesBig}>{children}</Box>
  );
}
