import React, { useEffect, useState } from 'react';
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

export default function TopCasinos({ openModal, setModalData }) {
  const [casinos, setCasinos] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/casinos`)
    // axios.get('http://localhost:8000/api/casinos')
      .then((c) => {
        const { data } = c.data;
        setCasinos(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Box sx={topCasinosBlockStyles}>
      <Typography sx={titleStyles}>
        Top casinos
      </Typography>
      <Grid container spacing={3}>
        {casinos.map((casino) => (
          <Grid item md={4} sm={6} xs={12} key={casino.name}>
            <Box>
              <CasinoCard
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
}
