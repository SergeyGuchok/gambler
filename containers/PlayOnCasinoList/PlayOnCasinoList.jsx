import Column from 'components/common/Column';
import Row from 'components/common/Row';
import Typography from 'components/common/Typography';
import PlayOnCasinoCard from 'components/PlayOnCasinoCard';
import Grid from '@mui/material/Grid';

const titleSx = {
  fontWeight: 700,
  fontSize: '40px',
  marginBottom: '40px',
  textAlign: 'center',
};
export default function PlayOnCasinoList({ title, casinos }) {
  return (
    <Column>
      <Typography sx={titleSx} variant="h2">
        {title}
      </Typography>
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
