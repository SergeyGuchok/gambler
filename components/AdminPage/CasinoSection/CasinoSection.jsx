import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import CasinoInfo from './components/CasinoInfo';
import CasinoDescription from './components/CasinoDescription';
import { useState } from 'react';
import axios from 'axios';
import { TYPE_PRIMARY } from 'constants/index';
import Button from 'components/common/Button';
import Row from 'components/common/Row';
import { initialCasinoState } from './constants';

export default function CasinoSection({
  casinos,
  descriptions,
  handleSnackbarOpen,
}) {
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [selectedCasino, setSelectedCasino] = useState(null);
  const onCasinoSelectChange = (e) => {
    const casino = casinos.find((c) => c.name === e.target.value);
    setSelectedCasino(casino);
    setSelectedDescription(descriptions.find((d) => d.name === casino.name));
  };

  const addNewCasino = () => {
    setSelectedCasino(initialCasinoState);
    setSelectedDescription({});
  };

  const handleCasinoSave = (data) => {
    axios
      .post('http://localhost:3000/api/casinos', data)
      .then((res) => handleSnackbarOpen(res))
      .catch((e) => handleSnackbarOpen(e));
  };

  const handleDescriptionSave = (data) => {
    axios
      .post('http://localhost:3000/api/descriptions', data)
      .then((res) => handleSnackbarOpen(res))
      .catch((e) => handleSnackbarOpen(e));
  };

  return (
    <>
      <Row sx={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Select
          value={selectedCasino?.name || null}
          onChange={onCasinoSelectChange}
          sx={{ width: '100%', marginRight: '50px' }}
        >
          {casinos.map((c) => {
            return (
              <MenuItem key={c.name} value={c.name}>
                {c.name}
              </MenuItem>
            );
          })}
        </Select>
        <Button type={TYPE_PRIMARY} onClick={addNewCasino}>
          Add new casino
        </Button>
      </Row>

      <Box mt={2}>
        {selectedCasino ? (
          <Box>
            <CasinoInfo casino={selectedCasino} saveCasino={handleCasinoSave} />
            <Box mt={4}>
              <h2>Description</h2>
              {selectedDescription ? (
                <CasinoDescription
                  description={selectedDescription}
                  casino={selectedCasino}
                  onSave={handleDescriptionSave}
                />
              ) : null}
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
