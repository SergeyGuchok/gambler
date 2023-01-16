import React from 'react';
import { Box, Grid } from '@mui/material';
import ReactCardFlip from 'react-card-flip';
import { primaryGrey, primaryWhite } from 'constants/index';
import Row from 'components/Row';
import TitleSubtitle from 'components/TitleSubtitle';
import Typography from 'components/Typography';
import PaymentOption from 'components/PaymentOption';
import Column from 'components/Column';
import ProsOrConsLine from 'components/ProsOrConsLine';

const optionsStyles = {
  width: '100%',
  color: primaryGrey,
  fontWeight: 600,
  fontSize: '15px',
  marginBottom: 1,
};

const gridStyles = {
  gap: 2,
  gridTemplateColumns: '1fr 1fr 1fr',
  display: 'grid',
  width: '100%',
};

export default function VerticalContent({
  flipped,
  mainCategory,
  payoutTime,
  winRate,
  paymentOptions,
  pros,
}) {
  return (
    <ReactCardFlip
      isFlipped={flipped}
      flipDirection="horizontal"
      containerStyle={{ width: '100%' }}
    >
      <Box sx={{ background: primaryWhite, minHeight: '235px' }}>
        <Row sx={{ justifyContent: 'space-between' }} mb={3}>
          <TitleSubtitle title="Category" subtitle={mainCategory} />
          <TitleSubtitle title="Payout" subtitle={payoutTime[0].content} />
          <TitleSubtitle title="Win Rate" subtitle={`${winRate}%`} />
        </Row>

        <Typography sx={optionsStyles}>Deposit options</Typography>
        <Grid sx={gridStyles}>
          {paymentOptions
            .filter((o) => !!o)
            .slice(0, 6)
            .map((option) => (
              <PaymentOption option={option} key={option} />
            ))}
        </Grid>
      </Box>

      <Box sx={{ background: primaryWhite, minHeight: '235px' }}>
        <Typography sx={optionsStyles}>Benefits</Typography>
        <Column sx={{ paddingBottom: '12px' }}>
          {pros.slice(0, 4).map((p) => (
            <ProsOrConsLine content={p} key={p} type="pros" />
          ))}
        </Column>
      </Box>
    </ReactCardFlip>
  );
}
