import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import CasinoAdsPanel from 'components/common/CasinoAdsPanel';
import axios from 'axios';
import { API_URL, IMAGE_URL } from 'constants/index';
import ReviewCard from 'components/common/ReviewCard';
import Pagination from 'containers/Pagination';
import Typography from 'components/common/Typography';
import { readMarkdown } from 'utils/index';
import matter from 'gray-matter';
import DescriptionBlock from 'containers/DescriptionBlock';
import ImagePaper from 'components/common/ImagePaper';
import Head from 'next/head';

const titleSx = {
  fontSize: '45px',
  fontWeight: 900,
  marginBottom: '40px',
  letterSpacing: '-0.5px',
};

export default function SlotsReviewPage({ casinoAdsPanel, content }) {
  const [slots, setSlots] = useState([]);
  const [page, setPage] = useState(1);

  const onPageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const fetchSlots = async () => {
      return await axios.get(`${API_URL}/slots?page=${page}`);
    };

    fetchSlots()
      .then(({ data }) => {
        setSlots(data);
      })
      .catch((e) => {
        console.log(e);
        setSlots([]);
      });
  }, [page]);

  return (
    <>
      <Head>
        <title>Upcoming Slots 2023 | TheGamblr.com</title>
        <meta name="description" content="Check out upcoming slots for 2023" />
        <meta
          name="keywords"
          content="upcoming slots, new slots, 2023 upcoming slots"
        />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Typography sx={titleSx} variant="h1">
        Upcoming Slots
      </Typography>
      <Grid container spacing="40px">
        <Grid item xs={3}>
          <ImagePaper
            image={`${IMAGE_URL}page-images/coming-soon.webp`}
            alt="Coming Soon Image"
          />
        </Grid>
        <Grid item xs={9}>
          <DescriptionBlock content={content} />
        </Grid>
      </Grid>
      <Grid container spacing="40px" mt={4}>
        <Grid item container xs={8} spacing="40px">
          {slots.map((slot, index) => (
            <Grid item xs={4} key={index}>
              <ReviewCard
                image={slot.imageSrc}
                title={slot.displayName}
                date={slot.description.date}
                provider={slot.provider}
                link={`/slot/${slot.name}`}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={4}>
          <CasinoAdsPanel ads={casinoAdsPanel} />
        </Grid>
      </Grid>
      <Box mt={6}>
        <Pagination onPageChange={onPageChange} />
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const { data: casinoAdsPanelData } = await axios.get(`${API_URL}/ads/panel`);
  const markdown = readMarkdown('texts/slots-reviews-page.md');

  const matterResult = matter(markdown);
  const metadata = matterResult.data;
  const content = matterResult.content;

  return {
    props: {
      casinoAdsPanel: casinoAdsPanelData,
      content,
      metadata,
    },
  };
}
