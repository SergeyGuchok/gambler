import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import CasinoInfo from 'components/AdminPage/CasinoInfo';
import CasinoDescription from 'components/AdminPage/CasinoDescription';

export default function Admin() {
  // return null;
  const [casinos, setCasinos] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [selectedCasino, setSelectedCasino] = useState(null);

  const onCasinoSelectChange = (e) => {
    const casino = casinos.find((c) => c.name === e.target.value);
    setSelectedCasino(casino);
    setSelectedDescription(descriptions.find((d) => d.name === casino.name));
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/casinos').then((res) => {
      const { data } = res;
      setCasinos(data);
    });

    axios.get('http://localhost:3000/api/descriptions').then((res) => {
      const { data } = res;
      console.log(data);
      setDescriptions(data);
    });
  }, []);

  const addNewCasino = () => {
    setSelectedCasino({});
    setSelectedDescription({});
  };

  const handleCasinoSave = (data) => {
    axios
      .post('http://localhost:3000/api/casinos', data)
      .then((res) => console.log(res));
  };

  const handleDescriptionSave = (data) => {
    axios
      .post('http://localhost:3000/api/descriptions', data)
      .then((res) => console.log(res));
  };

  if (!casinos) return null;

  return (
    <Box sx={{ marginTop: '200px' }}>
      <Select
        value={selectedCasino?.name || null}
        onChange={onCasinoSelectChange}
      >
        {casinos.map((c) => {
          return (
            <MenuItem key={c.name} value={c.name}>
              {c.name}
            </MenuItem>
          );
        })}
      </Select>
      <button onClick={addNewCasino}>Add new casino</button>

      <Box mt={2}>
        {selectedCasino ? (
          <Box>
            <CasinoInfo casino={selectedCasino} saveCasino={handleCasinoSave} />
            <hr />
            <Box mt={2}>
              <h2>Описание</h2>
              <CasinoDescription
                description={selectedDescription}
                casino={selectedCasino}
                onSave={handleDescriptionSave}
              />
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
