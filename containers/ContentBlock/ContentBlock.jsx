import Box from '@mui/material/Box';
import MuiMarkdown from 'mui-markdown';
import { primaryBlack, primaryWhite } from 'constants/index';
import Typography from 'components/common/Typography';
import PostLink from 'components/PostLink';

const h2Props = {
  sx: (theme) => ({
    color: primaryBlack,
    fontWeight: '700',
    fontSize: '30px',
    marginBottom: '30px',
    marginTop: '30px',
    '&:first-child': {
      marginTop: 0,
    },
  }),
  variant: 'h2',
};

const h3Props = {
  sx: (theme) => ({
    fontSize: '25px',
    lineHeight: '30px',
    fontWeight: '400',
    color: primaryBlack,
    margin: '20px 0',
  }),
  variant: 'h3',
};

const pProps = {
  sx: (theme) => ({
    fontSize: '16px',
    lineHeight: '24px',
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
  height: 'auto',
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  borderRadius: '20px',
  position: 'relative',
  padding: '30px',
  zIndex: 0,
});

const ulStyles = {
  paddingLeft: '20px',
};

const liStyles = {
  color: primaryBlack,
  fontSize: '15px',
  fontWeight: 600,
  '&:hover': {
    fontSize: '30px',
  },
};

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
  ul: {
    component: 'ul',
    props: {
      style: ulStyles,
    },
  },
  li: {
    component: 'li',
    props: {
      style: liStyles,
    },
  },
  img: {
    component: 'img',
    props: {
      style: { margin: '0 auto', borderRadius: '15px' },
    },
  },
};

export default function ContentBlock({ content }) {
  return (
    <Box sx={wrapperStyles}>
      <MuiMarkdown overrides={overrides}>{content}</MuiMarkdown>
    </Box>
  );
}
