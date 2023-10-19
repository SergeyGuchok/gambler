import { FOOTER_BACKGROUND, primaryGrey } from '../../constants';

export const footerWrapperStyles = {
  backgroundColor: FOOTER_BACKGROUND,
  marginTop: '200px',
  position: 'relative',
};

export const rowStyles = {
  height: '100px',
  justifyContent: 'center',
  alignItems: 'center',
};

export const textStyles = {
  fontSize: '14px',
  fontWeight: 600,
  color: primaryGrey,

  '& > a': {
    textDecoration: 'underline',
  },
};

export const separationLineStyles = {
  position: 'absolute',
  bottom: '100px',
  left: 0,
  right: 0,
  height: '1px',
  background: primaryGrey,
};
