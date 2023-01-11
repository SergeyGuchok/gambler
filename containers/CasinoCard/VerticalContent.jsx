import React from 'react';
import { Box, Grid } from '@mui/material';
import ReactCardFlip from 'react-card-flip';
import ProsOrConsLine from 'components/ProsOrConsLine';
import Row from 'components/Row';
import Column from 'components/Column';
import TitleSubtitle from 'components/TitleSubtitle';
import Typography from 'components/Typography';
import { primaryGrey } from 'constants/index';
import PaymentOption from 'components/PaymentOption';

const depositOptionsStyles = {
  width: '100%',
  color: primaryGrey,
  fontWeight: 600,
  fontSize: '15px',
  marginBottom: 1,
};

const paymentOptionsGridStyles = {
  gap: 2,
  gridTemplateColumns: '1fr 1fr',
  display: 'grid',
  width: '100%',
};

export default function VerticalContent({
  flipped, mainCategory, payoutTime, winRate, paymentOptions, pros,
}) {
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical" containerStyle={{ display: 'flex', flex: '1 1 auto' }}>
      <Row sx={{ justifyContent: 'space-evenly' }}>
        <Column sx={{ justifyContent: 'space-between' }}>
          <TitleSubtitle title="Category" subtitle={mainCategory} />
          <TitleSubtitle title="Payout" subtitle={payoutTime[0].content} />
          <TitleSubtitle title="Win Rate" subtitle={`${winRate}%`} />
        </Column>

        <Column sx={{ width: '380px', alignSelf: 'stretch', justifyContent: 'space-between' }}>
          <Typography sx={depositOptionsStyles}>
            Deposit options
          </Typography>
          <Grid sx={paymentOptionsGridStyles}>
            {paymentOptions.filter((o) => !!o).slice(0, 6).map((option) => (
              <PaymentOption key={option} option={option} />
            ))}
          </Grid>
        </Column>
      </Row>

      <Row sx={{ justifyContent: 'flex-start', marginLeft: '100px' }}>
        <Box>
          <Typography sx={depositOptionsStyles}>
            Benefits
          </Typography>
          <Column sx={{ paddingBottom: '10px' }}>
            {pros.slice(0, 4).map((p) => (
              <ProsOrConsLine key={p} type="pros" content={p} />
            ))}
          </Column>
        </Box>
      </Row>
    </ReactCardFlip>
  );
}
