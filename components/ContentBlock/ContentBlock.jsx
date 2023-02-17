import Box from '@mui/material/Box';
import { primaryBlack, primaryWhite } from 'constants/index';
import Typography from 'components/Typography';

const wrapperStyles = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow: '0px 25px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: '30px',
  position: 'relative',
  padding: '30px',
  zIndex: 0,
});

const titleStyles = (theme) => ({
  color: primaryBlack,
  fontWeight: '700',
  fontSize: '30px',
  marginBottom: '30px',
});

const textStyles = (theme) => ({
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: '400',
  color: primaryBlack,
  marginBottom: '15px',
  '&:last-child': {
    marginBottom: '0',
  },
});

const subtitleStyles = (theme) => ({
  fontSize: '25px',
  lineHeight: '30px',
  fontWeight: '400',
  color: primaryBlack,
  margin: '15px 0',
});

const typeToSxMapper = {
  title: titleStyles,
  text: textStyles,
  subtitle: subtitleStyles,
};

const typeToVariantMapper = {
  title: 'h2',
  text: 'body1',
  subtitle: 'h3',
};
export default function ContentBlock({ element }) {
  return (
    <Box sx={wrapperStyles}>
      {element.map((c, i) => (
        <Typography
          sx={typeToSxMapper[c.type]}
          key={i}
          variant={typeToVariantMapper[c.type]}
        >
          {c.content}
        </Typography>
      ))}
    </Box>
  );
}
