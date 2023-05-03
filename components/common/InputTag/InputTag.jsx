import { useState } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Row from 'components/common/Row';

export default function InputTag({ initialTags, onTagsChange }) {
  const [tags, setTags] = useState(initialTags);
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSave = (e) => {
    if (e.key === 'Enter') {
      setTags([...tags, value]);
      setValue('');
      onTagsChange([...tags, value]);
    }
  };

  const handleDelete = (index) => {
    const updated = [...tags].filter((t, i) => i !== index);
    setTags(updated);
    onTagsChange(updated);
  };

  return (
    <Row sx={{ alignItems: 'center' }}>
      {tags.map((tag, index) => (
        <Chip
          sx={{ marginRight: '10px' }}
          label={tag}
          key={index}
          onDelete={() => handleDelete(index)}
        />
      ))}
      <TextField
        type="text"
        value={value}
        variant="filled"
        onChange={handleInput}
        onKeyDown={handleSave}
      />
    </Row>
  );
}
