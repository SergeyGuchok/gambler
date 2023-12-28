import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Typography from 'components/common/Typography';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from 'components/common/Button';
import { TYPE_PRIMARY, TYPE_AD } from '../../../constants';
import Row from 'components/common/Row';
import TextField from '@mui/material/TextField';

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
  tags: '',
  displayName: '',
  provider: '',
  imageSrc:
    'https://ams3.digitaloceanspaces.com/thegamblr-storage/slots-images/',
  metaKeywords: '',
  metaDescription: '',
};

const rowSx = {
  margin: '10px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  color: 'black',
  fontSize: '16',
  fontWeight: 500,
};

const possibleTags = 'popular | new | unique | rtp | buy | upcoming';
export default function SlotsSection({ slots }) {
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
  };

  return (
    <Box>
      <Row sx={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Select
          value={state.name || null}
          onChange={onSelectSlot}
          sx={{ width: '100%', marginRight: '50px' }}
        >
          {slots.map((c) => {
            return (
              <MenuItem key={c.name} value={c.name}>
                {c.name}
              </MenuItem>
            );
          })}
        </Select>
        <Button type={TYPE_PRIMARY} onClick={onAddNewSlot}>
          Add new slot
        </Button>
      </Row>
      <Typography mb={2} mt={2} variant="h4">
        Tags:
      </Typography>
      {possibleTags}
      {state.description ? (
        <>
          <Typography variant="h4" mt={2} mb={2}>
            Slot Plain Info
          </Typography>
          {Object.keys(state).map((key, index) => {
            if (typeof state[key] !== 'string') return null;
            return (
              <Row sx={rowSx} key={index}>
                <TextField
                  sx={{
                    width: '100%',
                    marginRight: '20px',
                    background: 'white',
                  }}
                  name={key}
                  type="text"
                  placeholder={key}
                  value={state[key]}
                  onChange={updateState}
                />
                {key}
              </Row>
            );
          })}
          <Box mt={2}>
            <Typography variant="h4">Slot description</Typography>
            {Object.keys(state.description).map((key, index) =>
              key === 'date' ? (
                <Row sx={rowSx} key={index}>
                  <TextField
                    sx={{
                      width: '100%',
                      marginRight: '20px',
                      background: 'white',
                    }}
                    name={key}
                    type="date"
                    placeholder={key}
                    value={state.description[key]}
                    onChange={updateDescriptionState}
                  />
                  {key}
                </Row>
              ) : (
                <Row sx={rowSx} key={index}>
                  <TextField
                    sx={{
                      width: '100%',
                      marginRight: '20px',
                      background: 'white',
                    }}
                    name={key}
                    type="text"
                    placeholder={key}
                    value={state.description[key]}
                    onChange={updateDescriptionState}
                  />
                  {key}
                </Row>
              ),
            )}
          </Box>
          <Box mt={2} mb={2}>
            <Button type={TYPE_AD} onClick={onUpdateSlot}>
              Save Slot
            </Button>
          </Box>

          {JSON.stringify(state)}
        </>
      ) : null}
    </Box>
  );
}
