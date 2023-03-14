import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';

const wrapperSx = {
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  height: '100%',
  minHeight: '250px',
  maxWidth: '400px',
  maxHeight: '300px',
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
};

const reviewSx = {
  borderRadius: 0,
  boxShadow: 'none',
  minHeight: '200px',
};

export default function ImagePaper({ image, alt, isReview = false }) {
  const extraSx = isReview ? reviewSx : {};
  return (
    <Box
      sx={{
        ...wrapperSx,
        ...extraSx,
      }}
    >
      <Image
        priority={true}
        src={image}
        alt={alt}
        style={{ objectFit: 'cover' }}
        quality="100"
        placeholder
        fill
      />
    </Box>
  );
}
