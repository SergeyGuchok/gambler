import React, { useEffect, useState, memo } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from 'components/Typography';
import { API_URL, navMenuItemActive } from 'constants/index';
import CasinoCard from 'containers/CasinoCard';
import axios from 'axios';

const topCasinosBlockStyles = {
  marginTop: '200px',
};

const titleStyles = {
  fontSize: '40px', fontWeight: 700, color: navMenuItemActive, textAlign: 'center', marginBottom: '70px',
};

const TopCasinos = memo(function TopCasinosFunction({ openModal, setModalData, casinos }) {
  return (
    <Box sx={topCasinosBlockStyles}>
      <Typography sx={titleStyles}>
        Top casinos
      </Typography>
      <Grid container spacing={3}>
        {casinos.map((casino, index) => (
          <Grid item md={4} sm={6} xs={12} key={casino.name}>
            <Box>
              <CasinoCard
                index={index + 1}
                openModal={openModal}
                setModalData={() => setModalData({ ...casino })}
                {...casino}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
})

export default TopCasinos