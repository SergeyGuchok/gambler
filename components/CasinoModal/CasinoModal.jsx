import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Icon from 'components/Icon';
import { primaryWhite, navMenuItemActive, primaryGrey } from 'constants/index';

import Typography from 'components/Typography';
import Row from 'components/Row';
import Column from 'components/Column';
import ProsOrConsLine from 'components/ProsOrConsLine';
import Image from 'next/image';

const wrapperStyles = (theme) => ({
  width: '100%',
  backgroundColor: primaryWhite,
  padding: '40px',
  borderRadius: '30px',
});

const titleStyles = {
  fontSize: '30px',
  color: navMenuItemActive,
  lineHeight: '40px',
  fontWeight: '700',
};

const aboutStyles = {
  fontSize: '15px',
  lineHeight: '25px',
  color: primaryGrey,
  marginBottom: '20px',
};

const optionsStyles = {
  width: '100%',
  color: primaryGrey,
  fontWeight: 600,
  fontSize: '15px',
  marginBottom: 1,
};

const CasinoModal = forwardRef((props, ref) => {
  if (!props.data) return;
  const { pros, cons, about, imageSrc } = props.data;

  // eslint-disable-next-line consistent-return
  return (
    <Box ref={ref} sx={wrapperStyles}>
      <Row>
        <Box
          sx={{
            maxWidth: '360px',
            marginRight: '40px',
            display: 'flex',
            position: 'relative',
            width: '100%',
          }}
        >
          <Image
            src={imageSrc}
            alt="Casino Logo"
            style={{ objectFit: 'contain' }}
            fill
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Column>
            <Row
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <Typography sx={titleStyles}>About</Typography>
              <Icon
                name="cross"
                sx={{ height: '35px', width: '35px', cursor: 'pointer' }}
                onClick={props.onClose}
              />
            </Row>
            {about?.map((line) => (
              <Typography sx={aboutStyles} key={line}>
                {line}
              </Typography>
            ))}
          </Column>
        </Box>
      </Row>
      <Column>
        <Typography sx={titleStyles}>Pros & Cons</Typography>
        <Row sx={{ justifyContent: 'space-between', marginTop: '20px' }}>
          <Column sx={{ flex: 1 }}>
            <Typography sx={optionsStyles}>Pros</Typography>
            {pros
              ?.filter((p) => !!p)
              .map((pro) => (
                <ProsOrConsLine content={pro} key={pro} type="pros" />
              ))}
          </Column>
          <Column sx={{ flex: 1, marginLeft: '25px' }}>
            <Typography sx={optionsStyles}>Cons</Typography>
            {cons
              ?.filter((c) => !!c)
              .map((con) => (
                <ProsOrConsLine content={con} key={con} type="cons" />
              ))}
          </Column>
        </Row>
      </Column>
      {/* <Grid> */}
      {/*  {paymentOptions.filter((o) => !!o).slice(0, 6).map((option) => ( */}
      {/*    <PaymentOption option={option} key={option} /> */}
      {/*  ))} */}
      {/* </Grid> */}
    </Box>
  );
});

CasinoModal.displayName = 'CasinoModal';

export default CasinoModal;
