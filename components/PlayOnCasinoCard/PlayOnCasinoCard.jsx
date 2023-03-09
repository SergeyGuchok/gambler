import Box from '@mui/material/Box';
import Typography from 'components/common/Typography';
import CasinoImage from 'components/common/CasinoImage';
import Column from 'components/common/Column';
import Button from 'components/common/Button';
import {
  navMenuItemActive,
  primaryGrey,
  primaryWhite,
  PROD_URL,
  termsGrey,
} from '../../constants';
import Link from 'next/link';

const url =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
    ? PROD_URL
    : 'http://localhost:3000';

const wrapperSx = {
  backgroundColor: primaryWhite,
  height: '100%',
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  borderRadius: '20px',
  position: 'relative',
  padding: '15px 20px',
  zIndex: 0,
};

const bonusSx = {
  fontSize: '17px',
  lineHeight: '30px',
  textAlign: 'center',
  fontWeight: 600,
  color: navMenuItemActive,
  marginBottom: '10px',
};

const countryTitleSx = {
  fontSize: '17px',
  lineHeight: '30px',
  textAlign: 'center',
  marginTop: '10px',
};

const countrySubtitleSx = {
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '25px',

  '& > a': {
    textDecoration: 'underline',
  },
};

const termsSx = {
  fontSize: '12px',
  color: termsGrey,
  textAlign: 'center',
  marginTop: '10px',
};

export default function PlayOnCasinoCard({ casino }) {
  return (
    <Column sx={wrapperSx}>
      <CasinoImage isAd imageSrc={casino.imageSrc} />
      <Typography sx={bonusSx}>{casino.bonus}</Typography>
      <Link href={casino.refLink} target="_blank">
        <Button type="ad">Visit Casino</Button>
      </Link>
      <Typography sx={countryTitleSx}>Your country is accepted</Typography>
      <Typography sx={countrySubtitleSx}>
        See all bonuses in: <Link href={`${url}/`}>Belarus</Link>
      </Typography>
      <Typography sx={termsSx}>18+ | Terms Apply | Play Responsibly</Typography>
    </Column>
  );
}
