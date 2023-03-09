import Row from 'components/common/Row';
import Column from 'components/common/Column';
import Container from '@mui/material/Container';
import Typography from 'components/common/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import {
  navMenuItemActive,
  navMenuItem,
  primaryWhite,
  PROD_URL,
} from 'constants/index';
import Icon from 'components/common/Icon';
import Link from 'next/link';
import Box from '@mui/material/Box';
import React from 'react';

const titleStyles = {
  fontSize: '30px',
  color: navMenuItemActive,
  lineHeight: '40px',
  fontWeight: '700',
};

const mainCategoryStyles = (theme) => ({
  fontWeight: 600,
  fontSize: '14px',
  color: navMenuItemActive,
  marginBottom: '20px',
  lineHeight: '20px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '15px',
    marginBottom: '10px',
  },
});

const subCategoryStyles = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: '14px',
  color: navMenuItem,
  marginBottom: '5px',
  lineHeight: '20px',

  '&:hover': {
    color: navMenuItemActive,
  },

  '& .right-arrow': {
    marginLeft: '10px',
  },
});

const categoriesWrapperStyles = (theme) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
});

const wrapperStyles = {
  backgroundColor: primaryWhite,
  padding: '30px',
};

const url =
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
    ? PROD_URL
    : 'http://localhost:3000';

export default function MobileMenu({ onClose }) {
  return (
    <Container maxWidth="xl" sx={wrapperStyles}>
      <Row
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '30px',
        }}
      >
        <Typography sx={titleStyles}>Menu</Typography>
        <Icon
          name="cross"
          sx={{ height: '35px', width: '35px', cursor: 'pointer' }}
          onClick={onClose}
        />
      </Row>
      <Box sx={categoriesWrapperStyles} onClick={onClose}>
        <Column>
          <Typography sx={mainCategoryStyles}>Casinos</Typography>
          <Link href={`${url}/casinos/best`}>
            <Typography sx={subCategoryStyles}>
              Best casinos <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/casinos/fast`}>
            <Typography sx={subCategoryStyles}>
              Fast Withdrawal Casinos{' '}
              <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/casinos/spots-betting`}>
            <Typography sx={subCategoryStyles}>
              Sports Betting <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/casinos/bonuses`}>
            <Typography sx={subCategoryStyles}>
              Sign Up Bonuses <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/crypto`}>
            <Typography sx={subCategoryStyles}>
              Crypto Casinos <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/money`}>
            <Typography sx={subCategoryStyles}>
              Real Money Casinos <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/cases`}>
            <Typography sx={subCategoryStyles}>
              Case Openings <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/skins`}>
            <Typography sx={subCategoryStyles}>
              Skins Casinos <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/`}>
            <Typography sx={subCategoryStyles}>
              All Casinos <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
        </Column>
        <Column>
          <Typography sx={mainCategoryStyles}>Slots</Typography>
          <Link href={`${url}/slots/reviews`}>
            <Typography sx={subCategoryStyles}>
              All Slots Reviews <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/slots/coming-soon`}>
            <Typography sx={subCategoryStyles}>
              Upcoming Slots <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/slots/new`}>
            <Typography sx={subCategoryStyles}>
              New Slots <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/slots/bonus-buy`}>
            <Typography sx={subCategoryStyles}>
              Bonus Buy Slots <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/slots/best-rtp`}>
            <Typography sx={subCategoryStyles}>
              Best RTP Slots <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/slots/unique-features`}>
            <Typography sx={subCategoryStyles}>
              Unique Features Slots <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
        </Column>
        <Column>
          <Link href={`${url}/cases`}>
            <Typography sx={subCategoryStyles}>
              Case openings <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/`}>
            <Typography sx={subCategoryStyles}>
              Feedback <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href={`${url}/`}>
            <Typography sx={subCategoryStyles}>
              Home Page <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
        </Column>
      </Box>
    </Container>
  );
}
