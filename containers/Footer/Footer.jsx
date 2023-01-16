import Box from '@mui/material/Box';
import Row from 'components/Row';
import { FOOTER_BACKGROUND, primaryGrey } from 'constants/index';
import Container from '@mui/material/Container';
import Typography from 'components/Typography';

const footerWrapperStyles = {
  backgroundColor: FOOTER_BACKGROUND,
  marginTop: '200px',
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
};

export default function Footer() {
  return (
    <Box sx={footerWrapperStyles}>
      <Container maxWidth="xl">
        <Row sx={rowStyles}>
          <Typography sx={textStyles}>
            Copyright ©2023 Thegamblr.com | All Rights Reserved
          </Typography>
        </Row>
      </Container>
    </Box>
  );
}
