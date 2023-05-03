import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Typography from 'components/common/Typography';
import axios from 'axios';
import { API_URL } from 'constants/index';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const initialState = {
  name: '',
  displayName: '',
  imageSrc: '',
  tags: '',
  facts: [],
};
export default function DevelopersSection() {
  const [state, setState] = useState({});
  const [developers, setDevelopers] = useState([]);
  const [factKey, setFactKey] = useState('');
  const [factValue, setFactValue] = useState('');

  const onSelectDeveloper = (e) => {
    setState(developers.find((developer) => developer.name === e.target.value));
  };

  const onAddNewDeveloper = () => {
    setState(initialState);
  };
  const updateState = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onAddFact = () => {
    setState((prevState) => ({
      ...prevState,
      facts: [...prevState.facts, { [factKey]: factValue }],
    }));
    setFactValue('');
    setFactKey('');
  };

  const onUpdateDeveloper = () => {
    axios.post(`${API_URL}/developers`, state);
  };

  useEffect(() => {
    const getDevelopers = async () => {
      const { data } = await axios.get(`${API_URL}/developers`);
      setDevelopers(data);
    };

    getDevelopers().catch((e) => {
      setDevelopers([]);
    });
  }, []);

  const onDeleteFact = (i) => {
    setState((prevState) => ({
      ...prevState,
      facts: prevState.facts.filter((f, ind) => ind !== i),
    }));
  };

  return (
    <Box>
      <Typography mb={2}>Select provider if any:</Typography>
      <Select value={state.name || null} onChange={onSelectDeveloper}>
        {developers.map((c) => {
          return (
            <MenuItem key={c.name} value={c.name}>
              {c.name}
            </MenuItem>
          );
        })}
      </Select>
      <button onClick={onAddNewDeveloper}>Add new developer</button>
      <Typography mt={2}>Provider info:</Typography>
      <Box mt={2}>
        {Object.keys(state).map((key, index) => {
          if (typeof state[key] !== 'string') return;
          return (
            <Box mt={2} sx={{ display: 'flex' }} key={index}>
              <input
                value={state[key]}
                name={key}
                placeholder={key}
                onChange={updateState}
              />
              {key}
            </Box>
          );
        })}
      </Box>

      <Typography>Facts:</Typography>

      <Box mt={2} mb={2}>
        {state?.facts?.map((f, i) => (
          <Box sx={{ display: 'flex' }} key={i}>
            <Typography sx={{ marginTop: '10px' }}>
              {JSON.stringify(f)}
            </Typography>
            <button onClick={() => onDeleteFact(i)}>Delete fact</button>
          </Box>
        ))}
      </Box>

      <Box
        sx={{ display: 'flex', width: 400, justifyContent: 'space-between' }}
        mb={1}
      >
        <input
          style={{ marginRight: '20px' }}
          placeholder="key"
          value={factKey}
          onChange={(e) => setFactKey(e.target.value)}
        />
        <input
          placeholder="value"
          value={factValue}
          onChange={(e) => setFactValue(e.target.value)}
        />
      </Box>
      <button onClick={onAddFact}>Add fact</button>

      <Box mt={2} mb={2}>
        <button onClick={onUpdateDeveloper}>Save</button>
      </Box>
    </Box>
  );
}
