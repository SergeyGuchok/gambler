import { useState } from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import SlotsSection from '../components/AdminPage/SlotsSection';
import CasinoSection from 'components/AdminPage/CasinoSection';
import DevelopersSection from 'components/AdminPage/DevelopersSection';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';
import { API_URL } from '../constants';
import { OpenAiSlotReview } from 'containers/OpenAiSlotReview/OpenAiSlotReview';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box mt={2}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Admin({ casinos, descriptions, slots }) {
  return null;
  const [tab, setTab] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ marginTop: '300px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Casinos" {...a11yProps('casinos')} />
          <Tab label="Slots" {...a11yProps('slots')} />
          <Tab label="Developers" {...a11yProps('developers')} />
          <Tab label="OpenAI Casino Review" {...a11yProps('openai')} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <CasinoSection
          casinos={casinos}
          descriptions={descriptions}
          openSnack={handleSnackbarOpen}
        />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <SlotsSection slots={slots} openSnack={handleSnackbarOpen} />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <DevelopersSection />
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <OpenAiSlotReview />
      </TabPanel>
      <Box mb="1000px" />

      <Snackbar
        message={snackbarMessage}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        autoHideDuration={3000}
      />
    </Box>
  );
}

export async function getServerSideProps() {
  const { data: casinos } = await axios.get(`${API_URL}/casinos`);
  const { data: descriptions } = await axios.get(`${API_URL}/descriptions`);
  const {
    data: { slots },
  } = await axios.get(`${API_URL}/slots`);

  return {
    props: {
      casinos,
      descriptions,
      slots,
    },
  };
}
