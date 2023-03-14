import Box from '@mui/material/Box';
import ImagePaper from '../ImagePaper';
import {
  primaryBlack,
  primaryGrey,
  primaryWhite,
  PROD_URL,
} from '../../../constants';
import React from 'react';
import Typography from 'components/common/Typography';
import Link from 'next/link';

const wrapperStyles = (theme) => ({
  backgroundColor: primaryWhite,
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  borderRadius: '20px',
  position: 'relative',
  zIndex: 0,
  overflow: 'hidden',
  paddingBottom: '10px',
});

const titleSx = {
  color: primaryBlack,
  fontSize: '20px',
  letterSpacing: '-0.25px',
  fontWeight: 600,
  marginLeft: '15px',
  marginTop: '10px',
  textTransform: 'uppercase',
};

const dateSx = {
  fontSize: '16px',
  textAlign: 'center',
  color: primaryGrey,
  marginTop: '5px',
};

const providerSx = {
  position: 'absolute',
  borderRadius: '10px',
  backgroundColor: primaryBlack,
  color: primaryWhite,
  top: '10px',
  left: '10px',
  padding: '5px',
};

const url =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
    ? PROD_URL
    : 'http://localhost:3000';

export default function DeveloperReviewCard({
  image,
  title,
  date,
  provider,
  link,
}) {
  return (
    <Link href={`${url}${link}`}>
      <Box sx={wrapperStyles}>
        <ImagePaper image={image} alt={`${title} logo`} isReview />
        <Typography sx={titleSx}>{title}</Typography>
      </Box>
    </Link>
  );
}
