import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import Typography from 'components/Typography';
import { primaryBlack } from 'constants/index';
import { capitalizeFirstLetter } from 'utils/index';

const greenCheckStyles = {
  color: 'green',
  marginRight: '15px',
  fontSize: '30px',
};

const redCancelStyles = {
  color: 'red',
  marginRight: '15px',
  fontSize: '30px',
};

const textStyles = (theme) => ({
  fontSize: '20px',
  fontWeight: 600,
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center',
  color: primaryBlack,

  [theme.breakpoints.down('md')]: {
    marginTop: '5px',
    fontSize: '16px',
  },
});

export default function ProsOrConsLine({ type = 'pros', content }) {
  return (
    <Typography sx={textStyles}>
      {type === 'pros' ? (
        <CheckCircleOutlineIcon sx={greenCheckStyles} />
      ) : (
        <DoNotDisturbAltIcon sx={redCancelStyles} />
      )}
      {capitalizeFirstLetter(content)}
    </Typography>
  );
}
