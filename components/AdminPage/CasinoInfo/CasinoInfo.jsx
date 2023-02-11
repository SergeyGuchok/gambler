import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

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
        imageSrc
        <input
          name="imageSrc"
          type="text"
          placeholder="imageSrc"
          onChange={onChange}
          value={imageSrc}
        />
        Bonus
        <input
          name="bonus"
          type="text"
          placeholder="bonus"
          onChange={onChange}
          value={bonus}
        />
        name
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={onChange}
          value={name}
        />
        dispalyName
        <input
          name="displayName"
          type="text"
          placeholder="displayName"
          onChange={onChange}
          value={displayName}
        />
        mainCategory
        <input
          name="mainCategory"
          type="text"
          placeholder="mainCategory"
          value={mainCategory}
          onChange={onChange}
        />
        winRate
        <input
          name="winRate"
          type="number"
          placeholder="winRate"
          value={winRate}
          onChange={onChange}
        />
        refLink
        <input
          name="refLink"
          type="string"
          placeholder="winRate"
          value={refLink}
          onChange={onChange}
        />
        ranking
        <input
          name="ranking"
          type="number"
          placeholder="ranking"
          value={ranking}
          onChange={onChange}
        />
        categories
        <Box>
          {categories.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('categories', c)}>
                Удалить категорию
              </button>
            </>
          ))}
        </Box>
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
        pros
        <Box>
          {pros.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('pros', c)}>
                Удалить pros
              </button>
            </>
          ))}
        </Box>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={() => onArrayChange('pros', inputValue)}>
          add
        </button>
        cons
        <Box>
          {cons.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('cons', c)}>
                Удалить cons
              </button>
            </>
          ))}
        </Box>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={() => onArrayChange('cons', inputValue)}>
          add
        </button>
        paymentOptions
        <Box>
          {paymentOptions.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('paymentOptions', c)}>
                Удалить paymentOptions
              </button>
            </>
          ))}
        </Box>
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
        pageCategory
        <Box>
          {pageCategory.map((c) => (
            <>
              <p>{c}</p>
              <button onClick={() => onArrayRemove('pageCategory', c)}>
                Удалить pageCategory
              </button>
            </>
          ))}
        </Box>
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
        {JSON.stringify(state)}
        <button onClick={() => onSend()}>send</button>
      </Box>
    </Box>
  );
}
