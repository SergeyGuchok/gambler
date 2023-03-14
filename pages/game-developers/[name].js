import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import CasinoAdsPanel from 'components/common/CasinoAdsPanel';
import axios from 'axios';
import { API_URL } from 'constants/index';
import SlotsReviewCard from 'components/common/SlotsReviewCard';
import Pagination from 'containers/Pagination';
import Typography from 'components/common/Typography';
import { readMarkdown } from 'utils/index';
import matter from 'gray-matter';
import DescriptionBlock from 'containers/DescriptionBlock';
import Head from 'next/head';
import ImagePaper from 'components/common/ImagePaper'

const titleSx = {
  fontSize: '45px',
  fontWeight: 900,
  marginBottom: '40px',
  letterSpacing: '-0.5px',
};

export default function GameDeveloperPage({ developer, casinoAdsPanel, metadata, content }) {
  const { displayName, imageSrc } = developer

  return (
    <>
      <Head>
        <title>{`${displayName} Review 2023 | TheGamblr.com`}</title>
        <meta name="description" content="Review of all slot ever existed" />
        <meta name="keywords" content="slots review, slots reviews 2023" />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Typography sx={titleSx} variant="h1">
        {displayName} Review
      </Typography>
      <Grid container spacing="40px">
        <Grid item xs={8}>
          <DescriptionBlock content={content} />
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
  const { name } = context.query
  const { data: developerData } = await axios.get(`${API_URL}/developers/${name}`);
  const { data: casinoAdsData } = await axios.get(`${API_URL}/ads/panel`);
  const { data: reviewData } = await axios.get(`${API_URL}/developers/review/${name}`);
  
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
