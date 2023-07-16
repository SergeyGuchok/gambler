import Row from 'components/common/Row';
import { useState } from 'react';
import Column from 'components/common/Column';
import TextField from '@mui/material/TextField';
import Typography from 'components/common/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { API_URL, TYPE_AD } from 'constants/index';
import Button from 'components/common/Button';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
export function OpenAiSlotReview() {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [exampleSrc, setExampleSrc] = useState('');
  const [slot, setSlot] = useState('');
  const [developer, setDeveloper] = useState('');
  const [facts, setFacts] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [snackbar, setSnackbar] = useState({
    message: '',
    open: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSetFile = (e) => {
    const { files } = e.target;

    if (!files) return;

    const file = files[0];
    setImages((prevState) => [...prevState, file]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSetFacts = (e) => {
    setFacts(e.target.value);
  };

  const handleDeveloperChange = (e) => {
    setDeveloper(e.target.value);
  };

  const handleSlotChange = (e) => {
    setSlot(e.target.value);
  };

  const handleExampleSrcChange = (e) => {
    setExampleSrc(e.target.value);
  };
  const handleImageSrcChange = (e) => {
    setImageSrc(e.target.value);
  };

  const handleSend = () => {
    // axios.post(`${API_URL}/openai/test`, {});
    if (!name || !images.length || !developer || !slot || !exampleSrc || !facts)
      return;

    const formData = new FormData();
    images.forEach((i) => {
      formData.append(i.name, i);
    });

    setLoading(true);
    axios
      .post(`${API_URL}/images/upload`, formData)
      .then(({ data }) => {
        const { error, message } = data;
        setSnackbar({ message: message || error, open: true });
      })
      .catch((e) => {
        setSnackbar({ message: e, open: true });
      });

    axios
      .post(`${API_URL}/openai/create-slot-review`, {
        name,
        exampleSrc,
        slot,
        developer,
        facts,
        imageSrc,
        images: [...images.map((i) => i.name)],
      })
      .then(({ data }) => {
        const { error, message } = data;
        setLoading(false);
        // setSnackbar({ message: message || error, open: true });
      })
      .catch((e) => {
        setLoading(false);
        // setSnackbar({ message: e, open: true });
      });
  };

  const handleSnackbarClose = () => {
    setSnackbar({
      message: '',
      open: false,
    });
  };

  const handleDeleteImage = (name) => {
    setImages((prevState) => [...prevState].filter((i) => i.name !== name));
  };

  return (
    <Column>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Column gap="12px">
            <Typography>Slot explicit name (used in URL)</Typography>
            <TextField value={name} onChange={handleNameChange} />
          </Column>
        </Grid>
        <Grid item xs={12}>
          <Column gap="12px">
            <Typography>Example SRC</Typography>
            <TextField value={exampleSrc} onChange={handleExampleSrcChange} />
          </Column>
        </Grid>
        <Grid item xs={12}>
          <Column gap="12px">
            <Typography>Slot Full name</Typography>
            <TextField value={slot} onChange={handleSlotChange} />
          </Column>
        </Grid>
        <Grid item xs={12}>
          <Column gap="12px">
            <Typography>Example Facts as a string</Typography>
            <TextField value={facts} onChange={handleSetFacts} />
          </Column>
        </Grid>
        <Grid item xs={12}>
          <Column gap="12px">
            <Typography>Developer Full Name</Typography>
            <TextField value={developer} onChange={handleDeveloperChange} />
          </Column>
        </Grid>
        <Grid item xs={12}>
          <Column gap="12px">
            <Typography>Image Src to be in the right corner</Typography>
            <TextField value={imageSrc} onChange={handleImageSrcChange} />
          </Column>
        </Grid>
        <Grid item xs={12}>
          <Column gap="4px">
            <Typography variant="h5">Images selected: </Typography>
            <Typography variant="h6">
              First one to be the first on the page instead of a video
            </Typography>
            {images.map((i) => (
              <Row gap="4px" alignItems="center">
                <Typography>{i.name}</Typography>
                <CloseIcon onClick={() => handleDeleteImage(i.name)} />
              </Row>
            ))}
          </Column>
        </Grid>
        <Grid item xs={6}>
          <Row gap="12px" alignItems="center">
            <Typography variant="h5">Add new image: </Typography>
            <TextField type="file" onChange={handleSetFile} multiple />
          </Row>
        </Grid>
        {/*<Grid item xs={6}>*/}
        {/*  <Row gap="12px" alignItems="center">*/}
        {/*    <Typography variant="h5">Add Preview image </Typography>*/}
        {/*    <TextField type="file" onChange={handleSetFile} multiple />*/}
        {/*  </Row>*/}
        {/*</Grid>*/}
        <Grid item xs={12}>
          <Button type={TYPE_AD} onClick={handleSend} disabled={loading}>
            Create review
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        {...snackbar}
      />
    </Column>
  );
}
