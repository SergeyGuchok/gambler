import React, { memo } from 'react';
import Box from '@mui/material/Box';
import CasinoCard from 'containers/CasinoCard';

const wrapperStyles = {
  marginTop: '100px',
};

const CasinoList = memo(function CasinoListFunction({ category, openModal, setModalData, isHomePage, casinos }) {
  return (
    <Box sx={wrapperStyles}>
      {casinos.map((casino, index) => (
        <Box sx={{ marginBottom: '40px' }} key={casino.name}>
          <CasinoCard
            {...casino}
            index={isHomePage ? index + 4 : index + 1}
            type="horizontal"
            setModalData={() => setModalData({ ...casino })}
            openModal={openModal}
          />
        </Box>
      ))}
    </Box>
  );
})

export default CasinoList
