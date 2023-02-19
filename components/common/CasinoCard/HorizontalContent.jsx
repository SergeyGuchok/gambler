import React from 'react';
import { Box, Grid } from '@mui/material';
import ReactCardFlip from 'react-card-flip';
import ProsOrConsLine from 'components/ProsOrConsLine';
import Row from 'components/common/Row';
import Column from 'components/common/Column';
import TitleSubtitle from 'components/TitleSubtitle';
import Typography from 'components/common/Typography';
import { primaryGrey } from 'constants/index';
import PaymentOption from 'components/PaymentsBlock/PaymentOption';
import useMediaQuery from '@mui/material/useMediaQuery';

const depositOptionsStyles = {
  width: '100%',
  color: primaryGrey,
  fontWeight: 600,
  fontSize: '15px',
  marginBottom: 1,
};

const paymentOptionsGridStyles = (theme) => ({
  gap: 2,
  gridTemplateColumns: '1fr 1fr',
  display: 'grid',
  width: '100%',
});

const optionsWrapperStyles = {
  maxWidth: '380px',
  width: '100%',
  alignSelf: 'stretch',
  justifyContent: 'space-between',
};

const secondSideWrapperStyles = (theme) => ({
  justifyContent: 'flex-start',
  marginLeft: '100px',

  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
});

export default function HorizontalContent({
  flipped,
  mainCategory,
  payoutTime,
  winRate,
  paymentOptions,
  pros,
}) {
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const sx = isSm ? { marginRight: '10px' } : {};

  return (
    <ReactCardFlip
      isFlipped={flipped}
      flipDirection="vertical"
      containerStyle={{ display: 'flex', flex: '1 1 auto' }}
    >
      <Row sx={{ justifyContent: 'space-evenly' }}>
        <Column sx={{ justifyContent: 'space-between', ...sx }}>
          <TitleSubtitle title="Category" subtitle={mainCategory} />
          <TitleSubtitle title="Payout" subtitle={payoutTime[0].content} />
          <TitleSubtitle title="Win Rate" subtitle={`${winRate}%`} />
        </Column>

        <Column sx={optionsWrapperStyles}>
          <Typography sx={depositOptionsStyles}>Deposit options</Typography>
          <Grid sx={paymentOptionsGridStyles}>
            {paymentOptions
              .filter((o) => !!o)
              .slice(0, 6)
              .map((option) => (
                <PaymentOption key={option} option={option} />
              ))}
          </Grid>
        </Column>
      </Row>

      <Row sx={secondSideWrapperStyles}>
        <Box>
          <Typography sx={depositOptionsStyles}>Benefits</Typography>
          <Column>
            {pros.slice(0, 4).map((p) => (
              <ProsOrConsLine key={p} type="pros" content={p} />
            ))}
          </Column>
        </Box>
      </Row>
    </ReactCardFlip>
  );
}
