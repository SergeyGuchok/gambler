import Row from 'components/Row';
import Column from 'components/Column';
import Container from '@mui/material/Container';
import Typography from 'components/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { navMenuItemActive, navMenuItem, primaryWhite } from 'constants/index';
import Icon from '../../components/Icon';
import React from 'react';

const titleStyles = {
  fontSize: '30px',
  color: navMenuItemActive,
  lineHeight: '40px',
  fontWeight: '700',
};

const mainCategoryStyles = {
  fontWeight: 600,
  fontSize: '14px',
  color: navMenuItemActive,
  marginBottom: '20px',
  lineHeight: '20px',
};

const subCategoryStyles = {
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
};

const categoriesWrapperStyles = {
  width: '100%',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
};

const wrapperStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: primaryWhite,
  padding: '30px',
  borderRadius: '0px 0px 30px 30px',
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
      <Row sx={categoriesWrapperStyles}>
        <Column>
          <Typography sx={mainCategoryStyles}>Crypto gambling</Typography>
          <Typography sx={subCategoryStyles}>
            Online casinos <TrendingFlatIcon className="right-arrow" />
          </Typography>
        </Column>
        <Column>
          <Typography sx={mainCategoryStyles}>Real money gambling</Typography>
          <Typography sx={subCategoryStyles}>
            Online casinos <TrendingFlatIcon className="right-arrow" />
          </Typography>
        </Column>
        <Column>
          <Typography sx={mainCategoryStyles}>Skins gambling</Typography>
          <Typography sx={subCategoryStyles}>
            Online casinos <TrendingFlatIcon className="right-arrow" />
          </Typography>
        </Column>
        <Column>
          <Typography sx={subCategoryStyles}>
            Case openings <TrendingFlatIcon className="right-arrow" />
          </Typography>
          <Typography sx={subCategoryStyles}>
            Online casinos <TrendingFlatIcon className="right-arrow" />
          </Typography>
        </Column>
      </Row>
    </Container>
  );
}
