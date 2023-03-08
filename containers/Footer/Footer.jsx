import Box from '@mui/material/Box';
import Row from 'components/common/Row';
import { FOOTER_BACKGROUND, primaryGrey } from 'constants/index';
import Container from '@mui/material/Container';
import Typography from 'components/common/Typography';
import FooterDisclaimerBlock from 'components/FooterDisclaimerBlock';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const footerWrapperStyles = {
  backgroundColor: FOOTER_BACKGROUND,
  marginTop: '200px',
  position: 'relative',
};

const rowStyles = {
  height: '100px',
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyles = {
  fontSize: '14px',
  fontWeight: 600,
  color: primaryGrey,

  '& > a': {
    textDecoration: 'underline',
  },
};

const separationLineStyles = {
  position: 'absolute',
  bottom: '100px',
  left: 0,
  right: 0,
  height: '1px',
  background: primaryGrey,
};

const disclaimerText =
  'Online gambling laws differ in each country around the world and are\n' +
  'subject to change. In this way, we urge our readers to check local laws\n' +
  'before engaging in online gambling. We do not condone gambling in\n' +
  'jurisdictions where it is not permitted. Casino.org is not a gambling\n' +
  'operator, no gambling facilities are offered on this site. We cannot be\n' +
  'held responsible for activities engaged upon on third-party sites.';

const gambleText =
  '18+. Please gamble responsibly. Gambling can be very addictive. Only gamble with the money you can afford to lose.';

export default function Footer() {
  return (
    <Box sx={footerWrapperStyles}>
      <Container maxWidth="xl">
        <Grid container spacing={4} pb={4}>
          <Grid item md={6} xs={12}>
            <FooterDisclaimerBlock
              content={disclaimerText}
              title="Disclaimer"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FooterDisclaimerBlock
              content={gambleText}
              title="Gamble responsibly"
            />
          </Grid>
        </Grid>
        <Box sx={separationLineStyles} />
        <Row sx={rowStyles}>
          <Typography sx={textStyles}>
            Copyright ©2023 Thegamblr.com | All Rights Reserved |{' '}
            <Link href="https://www.thegamblr.com/privacy-policy">
              Privacy policy
            </Link>
          </Typography>
        </Row>
      </Container>
    </Box>
  );
}
