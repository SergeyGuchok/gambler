import Box from '@mui/material/Box';
import Head from 'next/head';
import { API_URL, primaryWhite } from 'constants/index';
import axios from 'axios';
import CasinoImage from 'components/common/CasinoImage';
import Row from 'components/common/Row';
import Column from 'components/common/Column';
import Typography from 'components/common/Typography';
import TextBlock from 'components/TextBlock';
import PrimaryButton from 'components/common/Button/PrimaryButton';
import Grid from '@mui/material/Grid';
import BonusBlock from 'components/BonusBlock';
import ProsAndCons from 'containers/ProsAndCons';
import CasinoAdBlock from 'containers/CasinoAdBlock';
import PaymentsBlock from 'components/PaymentsBlock';
import ContentBlock from 'containers/ContentBlock';
import path from 'path';
import fs from 'fs';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import s3Client from 'backend/services/S3';
import matter from 'gray-matter';

const wrapperStyles = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow: '0px 25px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: '30px',
  position: 'relative',
  padding: '30px',
  zIndex: 0,
});

const adsBlockWrapper = {
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow: '0px 25px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: '30px',
  position: 'relative',
  padding: '10px 20px',
  zIndex: 0,
};

const paymentsBlockWrapper = {
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  position: 'relative',
  padding: '20px',
  zIndex: 0,
};

const pageTitleStyles = {
  textAlign: 'center',
  fontSize: '40px',
  fontWeight: 600,
  marginBottom: '70px',
};

export default function CasinoPage({ casino, description, ads, content }) {
  const { bonus, pros, cons, paymentOptions } = casino;
  const { main, additional, title, metaDescription, metaKeywords } =
    description;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Typography sx={pageTitleStyles} variant="h1">
        {title}
      </Typography>
      <Grid container spacing="40px">
        <Grid item lg={3} md={4} xs={12}>
          <Box sx={wrapperStyles}>
            <CasinoImage imageSrc={casino.imageSrc} />
          </Box>
        </Grid>
        <Grid item lg={6} md={8} xs={12}>
          <TextBlock textArray={main} variant="h3" />
        </Grid>
        <Grid item lg={3} md={4} xs={12}>
          <Column>
            <PrimaryButton>Play</PrimaryButton>
            <Box mt={4}>
              <BonusBlock bonus={bonus} />
            </Box>
            <Box mt={4} sx={paymentsBlockWrapper}>
              <PaymentsBlock options={paymentOptions} />
            </Box>
          </Column>
        </Grid>
        <Grid item container lg={8} md={8} xs={12} spacing="40px">
          <Grid item lg={12}>
            <ProsAndCons pros={pros} cons={cons} />
          </Grid>
          <Grid item lg={12}>
            <TextBlock textArray={additional} variant="h3" />
          </Grid>
        </Grid>

        <Grid item lg={4} md={12} xs={12}>
          <Box sx={adsBlockWrapper}>
            {ads.map((casino) => (
              <CasinoAdBlock key={casino.name} casino={casino} />
            ))}
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing="40px" mt="40px">
        <Grid item xs={12}>
          <ContentBlock content={content} />
        </Grid>
      </Grid>
    </>
  );
}

// const file = () => {
//   const dir = path.join(process.cwd(), 'public/post.md');
//   const a = fs.readFileSync(dir, 'utf-8');
//   return a;
// };

export async function getServerSideProps(context) {
  const { query } = context;
  const { name } = query;
  // const reviewData = file();

  const url =
    process.env.ENVIRONMENT === 'production'
      ? API_URL
      : 'http://localhost:3000/api';
  const resultReview = await axios.get(`${url}/reviews/${name}`);
  const resultCasino = await axios.get(`${url}/casinos/${name}`);
  const resultDescription = await axios.get(`${url}/descriptions/${name}`);
  const resultAds = await axios.get(`${url}/ads/${name}`);

  const { data: reviewData } = resultReview.data;
  const { data: casinoData } = resultCasino.data;
  const { data: descriptionData } = resultDescription.data;
  const { data: adsData } = resultAds.data;

  const matterResult = matter(reviewData);
  const postMetadata = matterResult.data;
  const postContent = matterResult.content;

  return {
    props: {
      casino: casinoData[0],
      description: descriptionData[0],
      ads: adsData,
      content: postContent,
      postMeatadata: postMetadata,
    },
  };
}
