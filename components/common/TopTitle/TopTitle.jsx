import Typography from 'components/common/Typography';

const sx = {
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 600,
  margin: '100px 0 40px',
};

export default function TopTitle() {
  return (
    <Typography variant="h2" sx={sx}>
      🏆 The World&apos;s Best Online Casinos
    </Typography>
  );
}
