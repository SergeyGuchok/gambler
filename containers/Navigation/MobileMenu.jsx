import Row from 'components/Row';
import Column from 'components/Column';
import Container from '@mui/material/Container';
import Typography from 'components/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { navMenuItemActive, navMenuItem, primaryWhite } from 'constants/index';
import Icon from 'components/Icon';
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
          <Typography sx={mainCategoryStyles}>Crypto gambling</Typography>
          <Link href="/crypto">
            <Typography sx={subCategoryStyles}>
              Online casinos <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href="/crypto">
            <Typography sx={subCategoryStyles}>
              Slots <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href="/crypto">
            <Typography sx={subCategoryStyles}>
              Blackjack <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href="/crypto">
            <Typography sx={subCategoryStyles}>
              All <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
        </Column>
        <Column>
          <Typography sx={mainCategoryStyles}>Real money gambling</Typography>
          <Link href="/money">
            <Typography sx={subCategoryStyles}>
              Online casinos <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href="/money">
            <Typography sx={subCategoryStyles}>
              All <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
        </Column>
        <Column>
          <Typography sx={mainCategoryStyles}>Skins gambling</Typography>
          <Link href="/skins">
            <Typography sx={subCategoryStyles}>
              Online casinos <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href="/skins">
            <Typography sx={subCategoryStyles}>
              All <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
        </Column>
        <Column>
          <Link href="/cases">
            <Typography sx={subCategoryStyles}>
              Case openings <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href="/">
            <Typography sx={subCategoryStyles}>
              Feedback <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
          <Link href="/">
            <Typography sx={subCategoryStyles}>
              Home Page <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
        </Column>
      </Box>
    </Container>
  );
}
