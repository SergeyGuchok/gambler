import Box from '@mui/material/Box';
import { Fragment } from 'react';
import Column from 'components/common/Column';
import Typography from 'components/common/Typography';
import { primaryWhite } from '../../constants';
import Row from 'components/common/Row';
import Divider from '@mui/material/Divider';
const wrapperStyles = (theme) => ({
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  borderRadius: '20px',
  position: 'relative',
  padding: '15px 20px',
  zIndex: 0,
});

const titleSx = {
  fontWeight: '700',
  fontSize: '24px',
  textAlign: 'center',
  marginBottom: '10px',
};

const FactRow = ({ title, content }) => (
  <Row mt={1} mb={1}>
    <Typography>
      <Typography variant="span" sx={{ fontWeight: '600', fontSize: '1.1rem' }}>
        {title}:&nbsp;
      </Typography>
      {content}
    </Typography>
  </Row>
);

export default function DeveloperQuickFacts({ facts }) {
  return (
    <Column sx={{ marginTop: '20px' }}>
      <Box sx={wrapperStyles}>
        <Typography variant="h3" sx={titleSx}>
          Quick Facts
        </Typography>
        <Column>
          {facts.map((fact, index) => (
            <Fragment key={index}>
              <Divider />
              <FactRow
                title={Object.keys(fact)[0]}
                content={Object.values(fact)[0]}
              />
            </Fragment>
          ))}
        </Column>
      </Box>
    </Column>
  );
}
