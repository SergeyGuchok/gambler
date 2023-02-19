import { navMenuItemActive } from 'constants/index';

export const wrapperStyles = {
  marginTop: '200px',
};

export const titleStyles = (theme) => ({
  fontSize: '40px',
  fontWeight: 700,
  color: navMenuItemActive,
  textAlign: 'center',
  marginBottom: '70px',

  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
    marginBottom: '50px',
  },
});
