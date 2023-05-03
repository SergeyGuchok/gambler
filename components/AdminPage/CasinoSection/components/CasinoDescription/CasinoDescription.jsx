import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Row from 'components/common/Row';
import TextField from '@mui/material/TextField';

const rowSx = {
  margin: '10px',
  width: '100%',
  alignItems: 'center',
};

export default function CasinoDescription({ casino, onSave, description }) {
  const {
    name: savedName,
    main,
    additional,
    metaKeywords,
    title,
    metaDescription,
  } = description;

  const [state, setState] = useState({
    name: savedName || casino.name,
    main: main || [],
    additional: additional || [],
    title: title || '',
    metaKeywords: metaKeywords || '',
    metaDescription: metaDescription || '',
  });

  const onNameChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const onTitleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const onMetaKeywordsChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      metaKeywords: e.target.value,
    }));
  };

  const onMetaDescriptionChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      metaDescription: e.target.value,
    }));
  };

  const onMainDelete = (index) => {
    setState((prevState) => ({
      ...prevState,
      main: prevState.main.filter((m, i) => i !== index),
    }));
  };

  const onAdditionalDelete = (index) => {
    setState((prevState) => ({
      ...prevState,
      additional: prevState.additional.filter((m, i) => i !== index),
    }));
  };

  const onMainChange = (e, index) => {
    setState((prevState) => {
      const newMain = prevState.main;
      newMain[index] = e.target.value;

      return {
        ...prevState,
        main: newMain,
      };
    });
  };
  const onAdditionalChange = (e, index) => {
    setState((prevState) => {
      const newAdditional = prevState.additional;
      newAdditional[index] = e.target.value;

      return {
        ...prevState,
        additional: newAdditional,
      };
    });
  };

  const onAddToMain = () => {
    setState((prevState) => ({
      ...prevState,
      main: [...prevState.main, ''],
    }));
  };

  const onAddToAdditional = () => {
    setState((prevState) => ({
      ...prevState,
      additional: [...prevState.additional, ''],
    }));
  };

  const save = () => {
    onSave(state);
  };

  const Item = ({ value, onDelete, onChange, index }) => {
    const onChangeInput = (e) => onChange(e, index);
    const onDeleteItem = () => onDelete(index);

    return (
      <Box mt={1} display="flex" width="600px">
        <TextField
          type="text"
          onChange={onChangeInput}
          value={value}
          sx={{ width: '100%', marginRight: '20px', background: 'white' }}
        />
        <Box onClick={onDeleteItem}>Удалить</Box>
      </Box>
    );
  };

  return (
    <Box>
      <Row sx={rowSx}>
        <TextField
          type="text"
          value={state.name}
          onChange={onNameChange}
          sx={{ width: '100%', marginRight: '20px', background: 'white' }}
        />
        <p>name</p>
      </Row>
      <Row sx={rowSx}>
        <TextField
          sx={{ width: '100%', marginRight: '20px', background: 'white' }}
          type="text"
          value={state.title}
          onChange={onTitleChange}
        />
        <p>title</p>
      </Row>
      <Row sx={rowSx}>
        <TextField
          sx={{ width: '100%', marginRight: '20px', background: 'white' }}
          type="text"
          value={state.metaKeywords}
          onChange={onMetaKeywordsChange}
        />
        <p>MetaKeywords</p>
      </Row>
      <Row sx={rowSx}>
        <TextField
          sx={{ width: '100%', marginRight: '20px', background: 'white' }}
          type="text"
          value={state.metaDescription}
          onChange={onMetaDescriptionChange}
        />
        <p>MetaDescription</p>
      </Row>

      <Box
        display="flex"
        sx={{ justifyContent: 'space-between', marginTop: '20px', flex: 1 }}
      >
        <Box>
          Основное:
          {state.main.map((text, index) => (
            <Item
              key={index + text}
              value={text}
              index={index}
              onDelete={onMainDelete}
              onChange={onMainChange}
            />
          ))}
          <Box mt={2}>
            <button onClick={onAddToMain}>Добавить в основное</button>
          </Box>
        </Box>

        <Box>
          Дополнительное:
          {state.additional.map((text, index) => (
            <Item
              key={index + text}
              value={text}
              index={index}
              onDelete={onAdditionalDelete}
              onChange={onAdditionalChange}
            />
          ))}
          <Box mt={2}>
            <button onClick={onAddToAdditional}>Добавить в основное</button>
          </Box>
        </Box>
      </Box>

      <Box mt={2}>
        <button onClick={save}>Save</button>
      </Box>
    </Box>
  );
}
