import Box from '@mui/material/Box';
import Column from 'components/common/Column';
import Grid from '@mui/material/Grid';
import Typography from 'components/common/Typography/Typography';
import TextBlock from 'components/TextBlock';
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import TopTitle from 'components/common/TopTitle';

const DynamicCasinoList = dynamic(() => import('containers/CasinoList'));

const titleSx = {
  fontSize: '45px',
  fontWeight: 900,
  marginBottom: '20px',
  letterSpacing: '-0.5px',
};

const lgDownHideSx = (theme) => ({
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
});

const lgDownShowSx = (theme) => ({
  display: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
});

export default function CategoryPageContent({ casinos, metadata }) {
  const { title, subtitle, image, alt } = metadata;
  const textArray = String(subtitle).split('/n');

  return (
    <>
      <Box sx={{ height: '200px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Grid container spacing="40px">
          <Grid item container xs={12} lg={9}>
            <Grid item xs={12}>
              <Typography sx={titleSx} variant="h1">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={lgDownHideSx}>
              <TextBlock textArray={textArray} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Box
              sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                height: '100%',
                minHeight: '250px',
                maxWidth: '400px',
                maxHeight: '400px',
              }}
            >
              <Image
                src={image}
                alt={alt}
                style={{ objectFit: 'cover' }}
                quality="100"
                placeholder
                fill
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} sx={lgDownShowSx}>
            <TextBlock textArray={textArray} />
          </Grid>
        </Grid>
        <TopTitle />
        <DynamicCasinoList category="crypto" casinos={casinos} />
      </Column>
    </>
  );
}
