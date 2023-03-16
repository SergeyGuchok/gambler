import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import CasinoAdsPanel from 'components/common/CasinoAdsPanel';
import axios from 'axios';
import { API_URL } from 'constants/index';
import Typography from 'components/common/Typography';
import matter from 'gray-matter';
import DescriptionBlock from 'containers/DescriptionBlock';
import Head from 'next/head';
import ImagePaper from 'components/common/ImagePaper';
import ContentBlock from 'containers/ContentBlock';

const titleSx = {
  fontSize: '45px',
  fontWeight: 900,
  marginBottom: '40px',
  letterSpacing: '-0.5px',
};

export default function GameDeveloperPage({
  developer,
  casinoAdsPanel,
  content,
  metadata,
}) {
  const { metaKeywods, metaDescription } = metadata;
  const { displayName, imageSrc } = developer;

  return (
    <>
      <Head>
        <title>{`${displayName} Review 2023 | TheGamblr.com`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywods} />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Typography sx={titleSx} variant="h1">
        {displayName} Review
      </Typography>
      <Grid container spacing="40px">
        <Grid item xs={8}>
          <ContentBlock content={content} />
        </Grid>
        <Grid item xs={4} justifySelf="end">
          <ImagePaper image={imageSrc} alt={`${displayName} logo`} />
          <Box mt={4}>
            <CasinoAdsPanel ads={casinoAdsPanel} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  const { data: developerData } = await axios.get(
    `${API_URL}/developers/${name}`,
  );
  const { data: casinoAdsData } = await axios.get(`${API_URL}/ads/panel`);
  const { data: reviewData } = await axios.get(
    `${API_URL}/developers/review/${name}`,
  );

  const matterResult = matter(reviewData);
  const metadata = matterResult.data;
  const content = matterResult.content;

  return {
    props: {
      developer: developerData,
      casinoAdsPanel: casinoAdsData,
      content,
      metadata,
    },
  };
}
