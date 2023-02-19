import Grid from '@mui/material/Grid';
import PaymentOption from 'components/PaymentsBlock/PaymentOption';

const gridStyles = {
  gap: 2,
  gridTemplateColumns: '1fr 1fr 1fr',
  display: 'grid',
  width: '100%',
};

export default function PaymentsBlock({ options }) {
  return (
    <Grid sx={gridStyles}>
      {options
        .filter((o) => !!o)
        .slice(0, 6)
        .map((option) => (
          <PaymentOption option={option} key={option} />
        ))}
    </Grid>
  );
}
