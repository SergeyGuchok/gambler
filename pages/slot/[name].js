import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import matter from 'gray-matter';
import Typography from 'components/common/Typography';
import ImagePaper from 'components/common/ImagePaper';
import SlotQuickFacts from 'containers/SlotQuickFacts';
import ContentBlock from 'containers/ContentBlock';
import path from 'path';
import fs from 'fs';
import Head from 'next/head';
import PlayOnCasinoList from 'containers/PlayOnCasinoList';
import CasinoAdsPanel from 'components/common/CasinoAdsPanel';

const titleSx = {
  fontSize: '45px',
  fontWeight: 900,
  marginBottom: '20px',
  letterSpacing: '-0.5px',
};

const imageStyle = {
  objectFit: 'cover',
  position: 'absolute',
  height: '100%',
  width: '100%',
  left: '0',
  top: '0',
  right: '0',
  bottom: '0',
  color: 'transparent',
};

export default function SlotReviewPage({
  slot,
  content,
  casinosAds,
  metadata,
}) {
  const { displayName, provider, metaKeywords, metaDescription } = slot;
  const { videoUrl, imageSrc } = metadata;
  const titleConcat = `${displayName} slot review 2023 | TheGamblr.com`;
  const adsTitleConcat = `Play ${displayName} on`;
  return (
    <>
      <Head>
        <title>{titleConcat}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Grid container spacing="40px">
        <Grid item xs={9}>
          <Typography sx={titleSx} variant="h1">
            {displayName} Slot Review
          </Typography>
          <Box
            mt={2}
            mb={2}
            sx={{
              minHeight: '400px',
              maxHeight: '600px',
              height: '100%',
              position: 'relative',
            }}
          >
            {videoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title={`${displayName} review youtube video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : null}
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="slot preview"
                loading="lazy"
                style={imageStyle}
              />
            ) : null}
          </Box>
          <PlayOnCasinoList casinos={casinosAds} title={adsTitleConcat} />
          <Box mt={4} mb={10}>
            <ContentBlock content={content} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <ImagePaper image={slot.imageSrc} alt={`${slot.displayName} logo`} />
          <SlotQuickFacts description={slot.description} />
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { name } = context.query;

    const { data: slotData } = await axios.get(`${API_URL}/slots/${name}`);
    const { data: reviewData } = await axios.get(
      `${API_URL}/slots/review/${name}`,
    );
    const { data: casinoAdsData } = await axios.get(`${API_URL}/ads/best`);

    const matterResult = matter(reviewData);
    const metadata = matterResult.data;
    const content = matterResult.content;

    return {
      props: {
        slot: slotData,
        content,
        metadata,
        casinosAds: casinoAdsData,
      },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }
}
