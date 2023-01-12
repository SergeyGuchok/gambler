import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { API_URL } from 'constants/index';
import Box from '@mui/material/Box';
import CasinoCard from 'containers/CasinoCard';

const wrapperStyles = {
  marginTop: '100px',
};

const CasinoList = memo(function CasinoListFunction({ category, openModal, setModalData, isHomePage }) {
  const [casinos, setCasinos] = useState([]);

  useEffect(() => {
    if (!category) {
      // axios.get(`${API_URL}/casinos/list`)
      axios.get('http://localhost:3000/api/casinos/list')
        .then((c) => {

          console.log(c)
          const { data } = c.data;
          setCasinos(data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      // axios.get(`${API_URL}/casinos/list/${category}`)
      axios.get(`http://localhost:3000/api/casinos/list/${category}`)
        .then((c) => {

          console.log(c)
          const { data } = c.data;
          setCasinos(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

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
