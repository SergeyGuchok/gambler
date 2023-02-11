import Box from '@mui/material/Box';
import Head from 'next/head';
import { API_URL, primaryWhite } from 'constants/index';
import axios from 'axios';
import CasinoImage from 'components/CasinoImage';
import Row from 'components/Row';
import Column from 'components/Column';
import Typography from 'components/Typography';
import TextBlock from 'components/TextBlock';
import PrimaryButton from 'components/Button/PrimaryButton';
import Grid from '@mui/material/Grid';
import BonusBlock from 'components/BonusBlock';
import ProsAndCons from 'containers/ProsAndCons';
import CasinoAdBlock from 'containers/CasinoAdBlock';
import PaymentsBlock from 'components/PaymentsBlock'

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
}

const pageTitleStyles = {
  textAlign: 'center',
  fontSize: '40px',
  fontWeight: 600,
  marginBottom: '70px',
}

export default function CasinoPage({ casino, description, ads }) {
  const { bonus, pros, cons, paymentOptions } = casino;
  const { main, additional, title, metaDescription, metaKeywords } = description;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={metaDescription}
        />
        <meta name="keywords" content={metaKeywords} />
      </Head>
      <Box sx={{ height: '200px' }} />
      <Typography sx={pageTitleStyles} variant="h1">{title}</Typography>
      <Grid container spacing="40px">
        <Grid item xs={3}>
          <Box sx={wrapperStyles}>
            <CasinoImage imageSrc={casino.imageSrc} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <TextBlock textArray={main} variant="h3" />
        </Grid>
        <Grid item xs={3}>
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
        <Grid item container xs={8} spacing="40px">
          <Grid item xs={12}>
            <ProsAndCons pros={pros} cons={cons} />
          </Grid>
          <Grid item xs={12}>
            <TextBlock textArray={additional} variant="h3" />
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Box sx={adsBlockWrapper}>
            {ads.map((casino) => (
              <CasinoAdBlock key={casino.name} casino={casino} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { name } = query;

  const url =
    process.env.ENVIRONMENT === 'production'
      ? API_URL
      : 'http://localhost:3000/api';
  const resultCasino = await axios.get(`${url}/casinos/${name}`);
  const resultDescription = await axios.get(`${url}/descriptions/${name}`);
  const resultAds = await axios.get(`${url}/ads/${name}`);
  const { data: casinoData } = resultCasino.data;
  const { data: descriptionData } = resultDescription.data;
  const { data: adsData } = resultAds.data;

  return {
    props: {
      casino: casinoData[0],
      description: descriptionData[0],
      ads: adsData,
    },
  };
}
