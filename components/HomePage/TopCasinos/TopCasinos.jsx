import React, { useEffect, useState, memo } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from 'components/Typography';
import { API_URL, navMenuItemActive } from 'constants/index';
import CasinoCard from 'containers/CasinoCard';
import { useMediaQuery } from '@mui/material';

const topCasinosBlockStyles = {
  marginTop: '200px',
};

const titleStyles = (theme) => ({
  fontSize: '40px',
  fontWeight: 700,
  color: navMenuItemActive,
  textAlign: 'center',
  marginBottom: '70px',

  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
    marginBottom: '50px',
  },
});

const isHorizontal = (index, isMd, isXs) => {
  if (index > 1 && isMd && !isXs) return true;
};

const TopCasinos = ({ openModal, setModalData, casinos }) => {
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={topCasinosBlockStyles}>
      <Typography sx={titleStyles}>Top casinos</Typography>
      <Grid container spacing={3}>
        {casinos.map((casino, index) =>
          !isHorizontal(index, isMd, isXs) ? (
            <Grid item md={6} sm={6} xs={12} lg={4} key={casino.name}>
              <Box>
                <CasinoCard
                  index={index + 1}
                  openModal={openModal}
                  setModalData={() => setModalData({ ...casino })}
                  {...casino}
                />
              </Box>
            </Grid>
          ) : (
            <Grid item md={12} sm={12} xs={12} lg={4} key={casino.name}>
              <Box>
                <CasinoCard
                  type="horizontal"
                  index={index + 1}
                  openModal={openModal}
                  setModalData={() => setModalData({ ...casino })}
                  {...casino}
                />
              </Box>
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  );
};

export default TopCasinos;
