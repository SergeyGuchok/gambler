import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Typography from 'components/common/Typography';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const initialState = {
  name: '',
  description: {
    title: '',
    reels: '',
    rows: '',
    maxWin: '',
    volatility: '',
    minmax: '',
    date: '',
    paylines: '',
    rtp: '',
    provider: '',
  },
  displayName: '',
  provider: '',
  imageSrc: '',
  metaKeywords: '',
  metaDescription: '',
};
export default function SlotsInfo() {
  const [slots, setSlots] = useState([]);
  const [state, setState] = useState({});

  const onAddNewSlot = () => {
    setState(initialState);
  };

  const onSelectSlot = (e) => {
    setState(slots.find((slot) => slot.name === e.target.value));
  };
  const updateState = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const updateDescriptionState = (e) => {
    setState((prevState) => ({
      ...prevState,
      description: {
        ...prevState.description,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const onUpdateSlot = () => {
    axios
      .post('http://localhost:3000/api/slots', state)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    axios.get('http://localhost:3000/api/slots').then((res) => {
      const { data } = res;
      setSlots(data);
    });
  }, []);

  return (
    <Box>
      <Box mt={2} mb={2}>
        <Select value={state.name || null} onChange={onSelectSlot}>
          {slots.map((c) => {
            return (
              <MenuItem key={c.name} value={c.name}>
                {c.name}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
      <Box mt={2} mb={2}>
        <button onClick={onAddNewSlot}>Add new slot</button>
      </Box>
      {state.description ? (
        <>
          <Typography>Slot plain info:</Typography>
          {Object.keys(state).map((key, index) => {
            if (typeof state[key] !== 'string') return null;
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
          <Box mt={2}>
            <Typography>Slot description</Typography>
            {Object.keys(state.description).map((key, index) => (
              <Box mt={2} sx={{ display: 'flex' }} key={index}>
                <input
                  name={key}
                  value={state.description[key]}
                  onChange={updateDescriptionState}
                  placeholder={key}
                />
                {key}
              </Box>
            ))}
          </Box>
        </>
      ) : null}

      <Box mt={2} mb={2}>
        <button onClick={onUpdateSlot}>Save</button>
      </Box>

      {JSON.stringify(state)}
    </Box>
  );
}
