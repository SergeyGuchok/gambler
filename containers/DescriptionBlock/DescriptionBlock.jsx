import Box from '@mui/material/Box';
import MuiMarkdown from 'mui-markdown';
import { primaryBlack, primaryWhite } from 'constants/index';
import Typography from 'components/common/Typography';
import PostLink from 'components/PostLink';

const h2Props = {
  sx: (theme) => ({
    color: primaryBlack,
    fontWeight: '700',
    fontSize: '25px',
    marginBottom: '15px',
    marginTop: '15px',
    '&:first-child': {
      marginTop: 0,
    },
  }),
  variant: 'h2',
};

const h3Props = {
  sx: (theme) => ({
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: '600',
    color: primaryBlack,
    margin: '10px 0',
    '&:first-child': {
      marginTop: 0,
    },
  }),
  variant: 'h3',
};

const pProps = {
  sx: (theme) => ({
    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: '400',
    color: primaryBlack,
    marginBottom: '15px',
    '&:last-child': {
      marginBottom: '0',
    },
  }),
};

const wrapperStyles = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  borderRadius: '20px',
  position: 'relative',
  padding: '20px',
  zIndex: 0,
});

const overrides = {
  h2: {
    component: Typography,
    props: h2Props,
  },
  p: {
    component: Typography,
    props: pProps,
  },
  h3: {
    component: Typography,
    props: h3Props,
  },
  a: {
    component: PostLink,
  },
  img: {
    component: 'img',
    props: {
      style: { margin: '0 auto', borderRadius: '15px' },
    },
  },
};

export default function DescriptionBlock({ content }) {
  return (
    <Box sx={wrapperStyles}>
      <MuiMarkdown overrides={overrides}>{content}</MuiMarkdown>
    </Box>
  );
}
