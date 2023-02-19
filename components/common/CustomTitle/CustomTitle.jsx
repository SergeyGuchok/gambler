import Typography from 'components/common/Typography';

const sx = {
  fontSize: '60px',
  letterSpacing: '-0.5px',
  fontWeight: '600',
};
export default function CustomTitle({ children }) {
  return <Typography sx={sx}>{children}</Typography>;
}
