import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Row from 'components/common/Row';

const rowSx = {
  margin: '10px',
  width: '100%',
  '& > input': {
    width: '100%',
  },
};

export default function CasinoInfo({ casino, saveCasino }) {
  const [state, setState] = useState({
    categories: [],
    cons: [],
    imageSrc: '',
    winRate: 0,
    name: '',
    mainCategory: '',
    pageCategory: [],
    paymentOptions: [],
    payoutTime: [{ locale: 'en', content: '~1 hour' }],
    pros: [],
    ranking: 0,
    refLink: '',
    bonus: [],
    displayName: '',
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      ...casino,
    }));
  }, [casino]);

  const onArrayChange = (name, value) => {
    setState((prev) => ({
      ...prev,
      [name]: [...prev[name], value],
    }));
    setInputValue('');
  };

  const onArrayRemove = (name, value) => {
    setState((prev) => ({
      ...prev,
      [name]: prev[name].filter((c) => c !== value),
    }));
  };

  const onChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSend = () => {
    saveCasino(state);
  };

  const {
    categories,
    cons,
    imageSrc,
    winRate,
    name,
    mainCategory,
    pageCategory,
    paymentOptions,
    pros,
    ranking,
    refLink,
    bonus,
    displayName,
  } = state;

  return (
    <Box>
      <p>Данные казино</p>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Row sx={rowSx}>
          <input
            name="imageSrc"
            type="text"
            placeholder="imageSrc"
            onChange={onChange}
            value={imageSrc}
          />
          imageSrc
        </Row>
        <Row sx={rowSx}>
          <input
            name="bonus"
            type="text"
            placeholder="bonus"
            onChange={onChange}
            value={bonus}
          />
          bonus
        </Row>
        <Row sx={rowSx}>
          <input
            name="name"
            type="text"
            placeholder="name"
            onChange={onChange}
            value={name}
          />
          name
        </Row>
        <Row sx={rowSx}>
          <input
            name="displayName"
            type="text"
            placeholder="displayName"
            onChange={onChange}
            value={displayName}
          />
          displayName
        </Row>
        <Row sx={rowSx}>
          <input
            name="mainCategory"
            type="text"
            placeholder="mainCategory"
            value={mainCategory}
            onChange={onChange}
          />
          mainCategory
        </Row>
        <Row sx={rowSx}>
          <input
            name="winRate"
            type="number"
            placeholder="winRate"
            value={winRate}
            onChange={onChange}
          />
          winRate
        </Row>
        <Row sx={rowSx}>
          <input
            name="refLink"
            type="string"
            placeholder="winRate"
            value={refLink}
            onChange={onChange}
          />
          refLink
        </Row>
        <Row sx={rowSx}>
          <input
            name="ranking"
            type="number"
            placeholder="ranking"
            value={ranking}
            onChange={onChange}
          />
          ranking
        </Row>
        <b>categories</b>
        <Row sx={rowSx}>
          {categories.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('categories', c)}>
                delete
              </button>
            </>
          ))}
        </Row>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          onClick={() => onArrayChange('categories', inputValue)}
        >
          add
        </button>
        <b>pros</b>
        <Row sx={rowSx}>
          {pros.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('pros', c)}>delete</button>
            </>
          ))}
        </Row>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={() => onArrayChange('pros', inputValue)}>
          add
        </button>
        <b>cons</b>
        <Row sx={rowSx}>
          {cons.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('cons', c)}>delete</button>
            </>
          ))}
        </Row>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={() => onArrayChange('cons', inputValue)}>
          add
        </button>
        <b>paymentOptions</b>
        <Row sx={rowSx}>
          {paymentOptions.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('paymentOptions', c)}>
                delete
              </button>
            </>
          ))}
        </Row>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          onClick={() => onArrayChange('paymentOptions', inputValue)}
        >
          add
        </button>
        <b>pageCategory</b>
        <Row sx={rowSx}>
          {pageCategory.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('pageCategory', c)}>
                delete
              </button>
            </>
          ))}
        </Row>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          onClick={() => onArrayChange('pageCategory', inputValue)}
        >
          add
        </button>
        <hr />
        {JSON.stringify(state, null, 4)}
        <button onClick={() => onSend()}>send</button>
      </Box>
    </Box>
  );
}
