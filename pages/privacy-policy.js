import TextBlock from 'components/TextBlock';
import Box from '@mui/material/Box';
import Head from 'next/head';
import Typography from 'components/Typography';
import { primaryWhite } from '../constants';

const wrapperStyles = (theme) => ({
  marginTop: '40px',
});
const titleStyles = {
  textAlign: 'center',
  fontSize: '40px',
  fontWeight: 600,
  marginBottom: '70px',
};

const firstBlock = [
  'This Privacy Policy applies to thegamblr.com',
  'At thegamblr.com, we respect and value your privacy. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at thegamblr.com@gmail.com.',
];

const thirdBlock = [
  'When you visit our website, we only collect the personal information that you provide when you fill out our forms. This data may include your name, address, email address, and phone number. We use this data to provide you with services and to respond to any requests for information that you may have.',
  'We may use third-party services such as Google Analytics and other similar services to collect and store non-personally identifiable information about our website visitors. This data may include information such as the type of browser you are using, your IP address, the type of device you are using, and the pages you visit on our website. We use this data to gain insight into how our visitors use our website and to improve our website.',
  'We do not sell or rent your personal information to third parties. We may occasionally share your personal information with third-party service providers who provide services on our behalf. These service providers are contractually obligated to protect your personal information.',
];
const fifthBlock = [
  'We may use cookies on our website to improve your experience. Cookies are small pieces of data that are stored on your device when you visit our website. We may use cookies to remember your preferences and to provide you with a more personalized experience. You can disable cookies in your browser settings.',
  'We may also use web beacons on our website to track visitor behavior. Web beacons are small images that are embedded in a web page or email and are used to track website usage and email response rates.',
  'We take reasonable steps to protect the personal information that we collect and store. We use industry-standard encryption technologies when transferring and receiving data from our website. We also use firewalls and other security technologies to protect our databases from unauthorized access.',
];

const sixthBlock = [
  'We take reasonable steps to protect the personal information that we collect and store. However, no security system is impenetrable and we cannot guarantee the security of our databases.',
  'We may change this Privacy Policy from time to time. We will post any changes to our Privacy Policy on this page. Please check this page periodically for changes.',
  'By using our website, you consent to our Privacy Policy.',
];
export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>
          TheGamblr - Best online casinos to your choice! | Privacy Policy
        </title>
        <meta
          name="description"
          content="Your privacy is important to thegamblr.com so we have created a Privacy Policy that shows how we handle your personal information."
        />
      </Head>
      <Box sx={{ height: '270px' }} />
      <Typography sx={titleStyles} variant="h1">
        Privacy Policy
      </Typography>
      <Box sx={wrapperStyles}>
        <TextBlock textArray={firstBlock} variant="h3" />
      </Box>
      <Box sx={wrapperStyles}>
        <TextBlock textArray={thirdBlock} variant="h3" />
      </Box>
      <Box sx={wrapperStyles}>
        <TextBlock textArray={fifthBlock} variant="h3" />
      </Box>
      <Box sx={wrapperStyles}>
        <TextBlock textArray={sixthBlock} variant="h3" />
      </Box>
    </>
  );
}
