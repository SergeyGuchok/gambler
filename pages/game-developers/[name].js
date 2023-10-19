import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import CasinoAdsPanel from 'components/common/CasinoAdsPanel';
import axios from 'axios';
import { API_URL } from 'constants/index';
import Typography from 'components/common/Typography';
import matter from 'gray-matter';
import DeveloperQuickFacts from 'containers/DeveloperQuickFacts';
import Head from 'next/head';
import ImagePaper from 'components/common/ImagePaper';
import ContentBlock from 'containers/ContentBlock';
import { createDynamicMetatags } from '../../utils/metatags';

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
  const { displayName, imageSrc, facts, name } = developer;

  const logoUrl =
    'https://ams3.digitaloceanspaces.com/thegamblr-storage/seo-content/images/logo.webp';
  const pageUrl = `https://thegamblr.com/game-delopers/${name}`;
  const title = `${displayName} Review 2023 | TheGamblr.com`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywods} />
        {createDynamicMetatags({
          title,
          description: metaDescription,
          logoUrl: imageSrc || logoUrl,
          pageUrl,
        })}
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
          {!!facts.length ? (
            <Box mt={4}>
              <DeveloperQuickFacts facts={facts} />
            </Box>
          ) : null}
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
