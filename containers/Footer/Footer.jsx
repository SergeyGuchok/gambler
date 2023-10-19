import Box from '@mui/material/Box';
import Row from 'components/common/Row';
import Container from '@mui/material/Container';
import Typography from 'components/common/Typography';
import FooterDisclaimerBlock from 'components/FooterDisclaimerBlock';
import Grid from '@mui/material/Grid';
import { primaryGrey } from '../../constants';
import Link from 'next/link';
import {
  footerWrapperStyles,
  rowStyles,
  separationLineStyles,
  textStyles,
} from './Footer.styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const disclaimerText =
  'Online gambling laws differ in each country around the world and are\n' +
  'subject to change. In this way, we urge our readers to check local laws\n' +
  'before engaging in online gambling. We do not condone gambling in\n' +
  'jurisdictions where it is not permitted. Thegamblr.com is not a gambling\n' +
  'operator, no gambling facilities are offered on this site. We cannot be\n' +
  'held responsible for activities engaged upon on third-party sites.';

const gambleText =
  '18+. Please gamble responsibly. Gambling can be very addictive. Only gamble with the money you can afford to lose.';

export default function Footer() {
  const links = [
    <Link
      href="https://twitter.com/thegamblr_com"
      key="twitter"
      target="_blank"
    >
      <TwitterIcon
        sx={{ color: primaryGrey, '&:hover': { color: 'initial' } }}
      />
    </Link>,
    <InstagramIcon
      sx={{ color: primaryGrey, '&:hover': { color: 'initial' } }}
      key="instagram"
    />,
  ];

  return (
    <Box sx={footerWrapperStyles}>
      <Container maxWidth="xl">
        <Grid container spacing={4} pb={4}>
          <Grid item md={4} xs={12}>
            <FooterDisclaimerBlock
              content={disclaimerText}
              title="Disclaimer"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <FooterDisclaimerBlock
              content={gambleText}
              title="Gamble responsibly"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <FooterDisclaimerBlock links={links} title="Socials" />
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
