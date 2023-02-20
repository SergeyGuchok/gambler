import React, { memo } from 'react';
import Box from '@mui/material/Box';
import CasinoCard from 'components/common/CasinoCard';
import useMediaQuery from '@mui/material/useMediaQuery';

// eslint-disable-next-line react/display-name
const CasinoList = memo(({ category, isHomePage, casinos }) => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box>
      {casinos.map((casino, index) => (
        <Box sx={{ marginBottom: '40px' }} key={casino.name}>
          <CasinoCard
            {...casino}
            index={isHomePage ? index + 4 : index + 1}
            type={isXs ? 'vertical' : 'horizontal'}
          />
        </Box>
      ))}
    </Box>
  );
});

export default CasinoList;
