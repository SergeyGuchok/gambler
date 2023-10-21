import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import CasinoAdsPanel from 'components/common/CasinoAdsPanel';
import axios from 'axios';
import { API_URL, IMAGE_URL } from 'constants/index';
import SlotsReviewCard from 'components/common/SlotsReviewCard';
import Pagination from 'containers/Pagination';
import Typography from 'components/common/Typography';
import { readMarkdown } from 'utils/index';
import matter from 'gray-matter';
import DescriptionBlock from 'containers/DescriptionBlock';
import Head from 'next/head';
import ImagePaper from '../../components/common/ImagePaper';
import { createDynamicMetatags } from '../../utils/metatags';

const titleSx = {
  fontSize: '45px',
  fontWeight: 900,
  marginBottom: '40px',
  letterSpacing: '-0.5px',
};

export default function SlotsReviewPage({ casinoAdsPanel, content, metadata }) {
  const [slots, setSlots] = useState([]);
  const [slotsCount, setSlotsCount] = useState(0);
  const [page, setPage] = useState(1);

  const {
    metaKeywords,
    metaDescription,
    title,
    pageTitle,
    imageSrc,
    imageAlt,
  } = metadata;
  const onPageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const fetchSlots = async () => {
      return await axios.get(`${API_URL}/slots?page=${page}`);
    };

    fetchSlots()
      .then(({ data: { count, slots } }) => {
        setSlots(slots);
        setSlotsCount(count);
      })
      .catch((e) => {
        setSlots([]);
      });
  }, [page]);

  const logoUrl =
    'https://ams3.digitaloceanspaces.com/thegamblr-storage/seo-content/images/logo.webp';
  const pageUrl = 'https://www.thegamblr.com/slots/most-popular';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        {createDynamicMetatags({
          title: pageTitle,
          description: metaDescription,
          logoUrl: imageSrc || logoUrl,
          pageUrl,
        })}
      </Head>
      <Box sx={{ height: '200px' }} />
      <Typography sx={titleSx} variant="h1">
        {title}
      </Typography>
      <Grid container spacing="40px" mb={4}>
        {imageSrc ? (
          <Grid item xs={3}>
            <ImagePaper image={imageSrc} alt={imageAlt} />
          </Grid>
        ) : null}
        <Grid item xs={imageSrc ? 9 : 12}>
          <DescriptionBlock content={content} />
        </Grid>
      </Grid>
      <Grid container spacing="40px">
        <Grid item container xs={8} spacing="40px">
          {slots.map((slot, index) => (
            <Grid item xs={4} key={index}>
              <SlotsReviewCard
                image={slot.imageSrc}
                title={slot.displayName}
                date={slot.description.date}
                provider={slot.description.provider || slot.provider}
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
        <Pagination onPageChange={onPageChange} itemsCount={slotsCount} />
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const { data: casinoAdsPanelData } = await axios.get(`${API_URL}/ads/panel`);
  const markdown = readMarkdown('texts/slot/most-popular-slots.md');

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
