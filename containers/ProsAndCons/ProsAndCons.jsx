import ProsOrConsLine from 'components/ProsOrConsLine';
import Row from 'components/common/Row';
import Column from 'components/common/Column';
import Typography from 'components/common/Typography/Typography';
import React from 'react';
import { primaryGrey } from 'constants/index';
import Paper from 'components/common/Paper';

const optionsStyles = {
  width: '100%',
  color: primaryGrey,
  fontWeight: 600,
  fontSize: '15px',
  marginBottom: 1,
};
export default function ProsAndCons({ pros, cons }) {
  return (
    <Paper>
      <Row sx={{ justifyContent: 'space-between' }}>
        <Column sx={{ flex: 1 }}>
          <Typography sx={optionsStyles}>Pros</Typography>
          {pros
            ?.filter((p) => !!p)
            .map((pro) => (
              <ProsOrConsLine content={pro} key={pro} type="pros" />
            ))}
        </Column>
        <Column sx={{ flex: 1, marginLeft: '25px' }}>
          <Typography sx={optionsStyles}>Cons</Typography>
          {cons
            ?.filter((c) => !!c)
            .map((con) => (
              <ProsOrConsLine content={con} key={con} type="cons" />
            ))}
        </Column>
      </Row>
    </Paper>
  );
}
