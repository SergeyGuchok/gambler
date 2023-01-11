import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from 'constants/index';
import Box from '@mui/material/Box';
import CasinoCard from 'containers/CasinoCard';

const wrapperStyles = {
  marginTop: '100px',
};

export default function CasinoList({ category, openModal, setModalData }) {
  const [casinos, setCasinos] = useState([]);

  useEffect(() => {
    if (!category) {
      axios.get(`${API_URL}/casinos/list`)
      // axios.get('http://localhost:8000/api/casinos/list')
        .then((c) => {
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
      {casinos.map((casino) => (
        <Box sx={{ marginBottom: '40px' }} key={casino.name}>
          <CasinoCard
            {...casino}
            type="horizontal"
            setModalData={() => setModalData({ ...casino })}
            openModal={openModal}
          />
        </Box>
      ))}
    </Box>
  );
}
