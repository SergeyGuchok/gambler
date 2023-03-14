import { useState } from 'react';
import Link from 'next/link';
import {
  navBarBackgroundColor,
  navMenuItem,
  navMenuItemActive,
} from 'constants/index';
import Typography from 'components/common/Typography';
import Box from '@mui/material/Box';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const linkStyles = {
  display: 'flex',
  alignItems: 'center',
  color: navMenuItem,
  transition: '0.2s color',

  '&:hover': {
    color: navMenuItemActive,
  },

  '& .arrow-down': {
    transform: 'rotate(-90deg)',
  },
};

const sublinkStyles = {
  ...linkStyles,
  margin: '4px 0',
  '& .right-arrow': {
    marginLeft: '10px',
  },
  whiteSpace: 'nowrap',
};

const menuStyles = {
  position: 'absolute',
  top: '20px',
  left: '-20px',
  display: 'none',
  width: 'auto',
  minWidth: '100%',
  flexDirection: 'column',
  backgroundColor: navBarBackgroundColor,
  zIndex: -100,
  opacity: 0,
  boxShadow:
    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  borderRadius: '20px',
  padding: '20px 20px 16px 20px',
  transition: '0.5s opacity',
  boxSizing: 'content-box',
};

export default function LinkWithDropdown({ items, link, children }) {
  const [visible, setVisible] = useState(false);

  const handleOnMouseOver = () => {
    setVisible(true);
  };

  const handleOnMouseLeave = () => {
    setVisible(false);
  };

  const addStyles =
    !!items?.length && visible
      ? {
          display: 'flex',
          zIndex: 100,
          opacity: 1,
        }
      : {};

  return (
    <Box
      sx={{
        position: 'relative',
      }}
      onMouseLeave={handleOnMouseLeave}
      aria-haspopup="true"
    >
      <Link href={link}>
        <Typography sx={{ ...linkStyles }} onMouseOver={handleOnMouseOver}>
          {children}
          {!!items?.length ? <ChevronLeftIcon className="arrow-down" /> : null}
        </Typography>
      </Link>
      <Box sx={{ ...menuStyles, ...addStyles }}>
        {items?.map((item) => (
          <Link href={item.href} key={item.title}>
            <Typography sx={sublinkStyles}>
              {item.title} <TrendingFlatIcon className="right-arrow" />
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
