import React, { memo } from 'react';
import Box from '@mui/material/Box';
import CasinoCard from 'containers/CasinoCard';
import useMediaQuery from '@mui/material/useMediaQuery';

const wrapperStyles = {
  marginTop: '100px',
};

const CasinoList = memo(
  ({ category, openModal, setModalData, isHomePage, casinos }) => {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
      <Box sx={wrapperStyles}>
        {casinos.map((casino, index) => (
          <Box sx={{ marginBottom: '40px' }} key={casino.name}>
            <CasinoCard
              {...casino}
              index={isHomePage ? index + 4 : index + 1}
              type={isXs ? 'vertical' : 'horizontal'}
              setModalData={() => setModalData({ ...casino })}
              openModal={openModal}
            />
          </Box>
        ))}
      </Box>
    );
  },
);

export default CasinoList;
