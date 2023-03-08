import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SlotsInfo from '../components/AdminPage/SlotsInfo';
import CasinoSection from 'components/AdminPage/CasinoSection';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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

export default function Admin() {
  return null
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue, event);
    console.log(newValue, event);
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: '300px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Casinos" {...a11yProps(0)} />
          <Tab label="Slots" {...a11yProps(1)} />
          <Tab label="Slots" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CasinoSection />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SlotsInfo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
