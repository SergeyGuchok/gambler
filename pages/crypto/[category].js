import Head from 'next/head';
import axios from 'axios';
import Box from '@mui/material/Box';

import Column from 'components/common/Column';
import Title from 'components/common/Title';
import { API_URL } from 'constants/index';
import dynamic from 'next/dynamic';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
const sx = (theme) => {
  return {
    '.MuiDialog-paper': {
      borderRadius: '30px',
      maxWidth: '80%',
      boxShadow: '0px 50px 120px rgba(0, 0, 0, 0.1)',

      [theme.breakpoints.down('md')]: {
        boxShadow: 'none',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
      },
    },
  };
};

const DynamicCasinoList = dynamic(() => import('containers/CasinoList'));

export default function Crypto({ listCasinos, postMetadata, postContent }) {
  return (
    <>
      <Head>
        <title>TheGamblr - Crypto gambling sites reviews 2023</title>
        <meta name="description" content={postMetadata.metaDescription} />
      </Head>
      <Box sx={{ height: '270px' }} />
      <Column sx={{ justifyContent: 'center' }}>
        <Title content={postMetadata.title} />
        {/*<Subtitle content={postMetadata.subtitle} />*/}
        <DynamicCasinoList category="crypto" casinos={listCasinos} />
      </Column>
    </>
  );
}

const file = () => {
  const dir = path.join(process.cwd(), 'public/post.md');
  const a = fs.readFileSync(dir, 'utf-8');
  return a;
};

export async function getServerSideProps(context) {
  const { category } = context.query;
  const url =
    process.env.ENVIRONMENT === 'production'
      ? API_URL
      : 'http://localhost:3000/api';
  const resultList = await axios.get(`${url}/casinos/list/crypto`);
  const resultReview = await axios.get(
    `${url}/page-category/crypto-${category}`,
  );
  const { data: listData } = resultList.data;

  // const reviewData = file();
  const { data: reviewData } = resultReview.data;
  const matterResult = matter(reviewData);
  const postMetadata = matterResult.data;
  const postContent = matterResult.content;

  return {
    props: {
      listCasinos: listData,
      postMetadata,
      postContent,
    },
  };
}
