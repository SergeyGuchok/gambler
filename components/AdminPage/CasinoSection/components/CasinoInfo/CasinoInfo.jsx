import { useState } from 'react';
import Box from '@mui/material/Box';
import Row from 'components/common/Row';
import TextField from '@mui/material/TextField';
import InputTag from 'components/common/InputTag';
import Button from 'components/common/Button';
import { TYPE_AD } from 'constants';

const rowSx = {
  margin: '10px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  color: 'black',
  fontSize: '16',
  fontWeight: 500,
};

export default function CasinoInfo({ casino, saveCasino }) {
  const [state, setState] = useState(casino);
  const onArrayRemove = (name, value) => {
    setState((prev) => ({
      ...prev,
      [name]: prev[name].filter((c) => c !== value),
    }));
  };

  const onTagsChange = (name, tags) => {
    setState((prev) => ({
      ...prev,
      [name]: tags,
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
      <h2>Casino Data</h2>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Row sx={rowSx}>
          <TextField
            name="imageSrc"
            type="text"
            placeholder="imageSrc"
            onChange={onChange}
            value={imageSrc}
            sx={{ width: '100%', marginRight: '20px', background: 'white' }}
          />
          imageSrc
        </Row>
        <Row sx={rowSx}>
          <TextField
            name="bonus"
            type="text"
            placeholder="bonus"
            onChange={onChange}
            value={bonus}
            sx={{ width: '100%', marginRight: '20px', background: 'white' }}
          />
          bonus
        </Row>
        <Row sx={rowSx}>
          <TextField
            sx={{ width: '100%', marginRight: '20px', background: 'white' }}
            name="name"
            type="text"
            placeholder="name"
            onChange={onChange}
            value={name}
          />
          name
        </Row>
        <Row sx={rowSx}>
          <TextField
            sx={{ width: '100%', marginRight: '20px', background: 'white' }}
            name="displayName"
            type="text"
            placeholder="displayName"
            onChange={onChange}
            value={displayName}
          />
          displayName
        </Row>
        <Row sx={rowSx}>
          <TextField
            sx={{ width: '100%', marginRight: '20px', background: 'white' }}
            name="mainCategory"
            type="text"
            placeholder="mainCategory"
            value={mainCategory}
            onChange={onChange}
          />
          mainCategory
        </Row>
        <Row sx={rowSx}>
          <TextField
            sx={{ width: '100%', marginRight: '20px', background: 'white' }}
            name="winRate"
            type="number"
            placeholder="winRate"
            value={winRate}
            onChange={onChange}
          />
          winRate
        </Row>
        <Row sx={rowSx}>
          <TextField
            sx={{ width: '100%', marginRight: '20px', background: 'white' }}
            name="refLink"
            type="string"
            placeholder="winRate"
            value={refLink}
            onChange={onChange}
          />
          refLink
        </Row>
        <Row sx={rowSx}>
          <TextField
            sx={{ width: '100%', marginRight: '20px', background: 'white' }}
            name="ranking"
            type="number"
            placeholder="ranking"
            value={ranking}
            onChange={onChange}
          />
          ranking
        </Row>
        <Box mt={5} />
        <b>Categories</b>
        <Row sx={rowSx}>
          <InputTag
            initialTags={categories}
            onTagsChange={(tags) => onTagsChange('categories', tags)}
          />
        </Row>
        <b>Pros</b>
        <Row sx={rowSx}>
          <InputTag
            initialTags={pros}
            onTagsChange={(tags) => onTagsChange('pros', tags)}
          />
        </Row>
        <b>Cons</b>
        <Row sx={rowSx}>
          <InputTag
            initialTags={cons}
            onTagsChange={(tags) => onTagsChange('cons', tags)}
          />
        </Row>
        <b>PaymentOptions</b>
        <Row sx={rowSx}>
          <InputTag
            initialTags={paymentOptions}
            onTagsChange={(tags) => onTagsChange('paymentOptions', tags)}
          />
        </Row>
        <b>PageCategory</b>
        <Row sx={rowSx}>
          <InputTag
            initialTags={pageCategory}
            onTagsChange={(tags) => onTagsChange('pageCategory', tags)}
          />
        </Row>
        <Button type={TYPE_AD} onClick={onSend}>
          Save Casino Info
        </Button>
        <hr />
        {JSON.stringify(state)}
      </Box>
    </Box>
  );
}
