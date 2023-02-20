import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CasinoCard from 'components/common/CasinoCard';
import { useMediaQuery } from '@mui/material';
import TopTitle from 'components/common/TopTitle';

import { wrapperStyles } from './styles';

const isHorizontal = (index, isMd, isXs) => {
  if (index > 1 && isMd && !isXs) return true;
};

const TopCasinos = ({ casinos }) => {
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={wrapperStyles}>
      <TopTitle />
      <Grid container spacing={3}>
        {casinos.map((casino, index) =>
          !isHorizontal(index, isMd, isXs) ? (
            <Grid item md={6} sm={6} xs={12} lg={4} key={casino.name}>
              <Box>
                <CasinoCard index={index + 1} {...casino} />
              </Box>
            </Grid>
          ) : (
            <Grid item md={12} sm={12} xs={12} lg={4} key={casino.name}>
              <Box>
                <CasinoCard type="horizontal" index={index + 1} {...casino} />
              </Box>
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  );
};

export default TopCasinos;
