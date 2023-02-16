import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Row from 'components/Row';

const rowSx = {
  margin: '10px',
  width: '100%',
  '& > input': {
    width: '100%',
  },
};

export default function CasinoDescription({ casino, onSave, description }) {
  const {
    name: savedName,
    main,
    additional,
    metaKeywords,
    title,
    metaDescription,
    content,
  } = description;

  const [state, setState] = useState({
    name: savedName || casino.name,
    main: main || [],
    additional: additional || [],
    title: title || '',
    metaKeywords: metaKeywords || '',
    metaDescription: metaDescription || '',
    content: content || [],
  });
  const [contentItem, setContentItem] = useState({});

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      ...description,
    }));
  }, [description]);

  const onNameChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const onAddContentItem = () => {
    setState((prevState) => ({
      ...prevState,
      content: [...prevState.content, []],
    }));
  };

  const onContentItemDelete = (i1, i2) => {
    const newContent = [...state.content];
    const contentItem = state.content[i1];
    const filteredItem = contentItem.filter((c, i) => i !== i2);
    newContent[i1] = filteredItem;

    setState((prevState) => ({
      ...prevState,
      content: newContent,
    }));
  };

  const onContentItemAdd = (i1) => {
    const newContent = [...state.content];
    const contentItem = newContent[i1];
    const newContentItem = [...contentItem, {}];
    newContent[i1] = newContentItem;

    setState((prevState) => ({
      ...prevState,
      content: newContent,
    }));
  };

  const onContentItemContentChange = (i1, i2, value) => {
    const newContent = [...state.content];
    const contentItem = state.content[i1][i2];
    contentItem.content = value;
    newContent[i1][i2] = contentItem;

    setState((prevState) => ({
      ...prevState,
      content: newContent,
    }));
  };

  const onContentItemTypeChange = (i1, i2, value) => {
    console.log(i1, i2, value);
    const newContent = [...state.content];
    const contentItem = state.content[i1][i2];
    contentItem.type = value;
    newContent[i1][i2] = contentItem;

    setState((prevState) => ({
      ...prevState,
      content: newContent,
    }));
  };

  const onDeleteWholeItem = (i1) => {
    const newContent = [...state.content].filter((c, i) => i !== i1);
    setState((prevState) => ({
      ...prevState,
      content: newContent,
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
        <input
          type="text"
          onChange={onChangeInput}
          value={value}
          style={{ width: '100%' }}
        />
        <Box onClick={onDeleteItem}>Удалить</Box>
      </Box>
    );
  };

  console.log(state.content);

  return (
    <Box>
      <Row sx={rowSx}>
        <input type="text" value={state.name} onChange={onNameChange} />
        <p>name</p>
      </Row>
      <Row sx={rowSx}>
        <input type="text" value={state.title} onChange={onTitleChange} />
        <p>title</p>
      </Row>
      <Row sx={rowSx}>
        <input
          type="text"
          value={state.metaKeywords}
          onChange={onMetaKeywordsChange}
        />
        <p>MetaKeywords</p>
      </Row>
      <Row sx={rowSx}>
        <input
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

      <Box sx={{ marginTop: '40px', marginBottom: '40px' }}>
        <b>Content:</b>
        <button onClick={onAddContentItem}>Add content item</button>
        {state.content.map((el, index) => {
          return (
            <Box key={el + index}>
              <button onClick={() => onDeleteWholeItem(index)}>
                Delete whole item
              </button>
              <b>Content item {index + 1}</b>
              {el.map((c, i) => (
                <Box key={i + c}>
                  <Row sx={rowSx}>
                    <input
                      type="text"
                      value={c.type}
                      onChange={(e) =>
                        onContentItemTypeChange(index, i, e.target.value)
                      }
                    />
                    <p>type</p>
                  </Row>
                  <Row sx={rowSx}>
                    <input
                      type="text"
                      value={c.content}
                      onChange={(e) =>
                        onContentItemContentChange(index, i, e.target.value)
                      }
                    />
                    <p>content</p>
                  </Row>
                  <button onClick={() => onContentItemDelete(index, i)}>
                    Delete item
                  </button>
                </Box>
              ))}
              <button onClick={() => onContentItemAdd(index)}>Add item</button>
              <hr />
            </Box>
          );
        })}
      </Box>

      <Box mt={2}>
        <button onClick={save}>Save</button>
      </Box>
    </Box>
  );
}
