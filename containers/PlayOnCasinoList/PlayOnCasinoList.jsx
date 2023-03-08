import Column from 'components/common/Column';
import Row from 'components/common/Row';
import Typography from 'components/common/Typography';
import PlayOnCasinoCard from 'components/PlayOnCasinoCard';
import Grid from '@mui/material/Grid';

const titleSx = {
  fontWeight: 700,
  fontSize: '40px',
  marginBottom: '50px',
  textAlign: 'center',
};
export default function PlayOnCasinoList({ title, casinos }) {
  return (
    <Column>
      <Typography sx={titleSx} variant="h3">{`Play ${title} on`}</Typography>
      <Grid container spacing="20px">
        {casinos.map((c, i) => (
          <Grid item xs={3} key={i}>
            <PlayOnCasinoCard casino={c} />
          </Grid>
        ))}
      </Grid>
    </Column>
  );
}
