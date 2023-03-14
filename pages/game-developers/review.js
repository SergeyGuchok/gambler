import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import CasinoAdsPanel from 'components/common/CasinoAdsPanel';
import axios from 'axios';
import { API_URL, IMAGE_URL } from 'constants/index';
import SlotsReviewCard from 'components/common/SlotsReviewCard';
import Typography from 'components/common/Typography';
import { readMarkdown } from 'utils/index';
import matter from 'gray-matter';
import DescriptionBlock from 'containers/DescriptionBlock';
import ImagePaper from 'components/common/ImagePaper';
import Head from 'next/head';
import DeveloperReviewCard from 'components/common/DeveloperReviewCard';
import PlayOnCasinoList from '../../containers/PlayOnCasinoList';

const titleSx = {
  fontSize: '45px',
  fontWeight: 900,
  marginBottom: '40px',
  letterSpacing: '-0.5px',
};

export default function GameDevelopersReview({
  content,
  casinoAdsPlayOn,
  metadata,
  developers,
}) {
  const { title, pageTitle, metaKeywords, metaDescription } = metadata

  const adsTitle = 'All Game Developers on the Best Casinos';

  return (
    <>
      <Head>
        <title>
          {pageTitle}
        </title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={metaKeywords}
        />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Typography sx={titleSx} variant="h1">
        {title}
      </Typography>
      <Grid container spacing="40px">
        <Grid item xs={12}>
          <DescriptionBlock content={content} />
        </Grid>
      </Grid>
      <Grid container spacing="40px" mt={4}>
        <Grid item xs={12}>
          <PlayOnCasinoList casinos={[...casinoAdsPlayOn]} title={adsTitle} />
        </Grid>
      </Grid>
      <Grid container spacing="20px" mt={4}>
        {developers.map((developer, index) => (
          <Grid item xs={12 / 5} key={index}>
            <DeveloperReviewCard
              image={developer.imageSrc}
              title={developer.displayName}
              link={`/game-developers/${developer.name}`}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export async function getServerSideProps() {
  const { data: developersData } = await axios.get(`${API_URL}/developers`);
  const { data: casinoAdsData } = await axios.get(`${API_URL}/ads/best`);

  const markdown = readMarkdown('texts/game-developers/developers-review-page.md');

  const matterResult = matter(markdown);
  const metadata = matterResult.data;
  const content = matterResult.content;

  return {
    props: {
      casinoAdsPlayOn: casinoAdsData,
      developers: developersData,
      content,
      metadata,
    },
  };
}
