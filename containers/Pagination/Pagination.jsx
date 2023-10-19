import { useState } from 'react';
import Box from '@mui/material/Box';
import Row from 'components/common/Row';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Typography from 'components/common/Typography';
import { primaryBlack, termsGrey } from 'constants/index';

const pageItemSx = {
  fontSize: '22px',
  letterSpacing: '-0.25px',
  fontWeight: 600,
  color: termsGrey,
  margin: '0 8px',
  cursor: 'pointer',
};

const activePageSx = {
  ...pageItemSx,
  color: primaryBlack,
};

const arrowSx = {
  color: primaryBlack,
  fontSize: '30px',
  cursor: 'pointer',
};

const MAX_PAGES_TO_SHOW = 5;
const FIRST_PAGES_TO_SHOW = 3;
const LAST_PAGES_TO_SHOW = 2;
const calculatePagesToShow = (activePage, pagesArray, pagesCount) => {
  if (pagesCount < MAX_PAGES_TO_SHOW) return pagesArray;

  if (activePage + MAX_PAGES_TO_SHOW - 1 >= pagesCount) {
    return pagesArray.slice(-MAX_PAGES_TO_SHOW);
  }

  return [
    ...pagesArray.splice(activePage - 1, FIRST_PAGES_TO_SHOW),
    '...',
    ...pagesArray.slice(-LAST_PAGES_TO_SHOW),
  ];
};

const PageItem = ({ page, isActive, onPageChange }) => {
  const onClick = () => {
    onPageChange(page);
  };

  const sx = isActive ? activePageSx : pageItemSx;
  return (
    <Typography sx={sx} onClick={onClick}>
      {page}
    </Typography>
  );
};

export default function Pagination({
  itemsPerPage = 9,
  itemsCount = 50,
  onPageChange,
}) {
  const [activePage, setActivePage] = useState(1);

  const pagesCount = Math.ceil(itemsCount / itemsPerPage);
  const pagesArray = [...Array(pagesCount)].map((k, i) => i + 1);

  const pagesToShow = calculatePagesToShow(activePage, pagesArray, pagesCount);
  const handlePageChange = (page) => {
    setActivePage(page);
    onPageChange(page);
  };

  const handleLeftClick = () => {
    if (activePage !== 1) {
      handlePageChange(activePage - 1);
    }
  };
  const handleRightClick = () => {
    if (activePage !== pagesCount) {
      handlePageChange(activePage + 1);
    }
  };

  if (itemsPerPage > itemsCount) return null;

  if (!pagesToShow.length) return null;

  return (
    <Row sx={{ alignItems: 'center' }}>
      <WestIcon
        sx={{ ...arrowSx, marginRight: '5px' }}
        onClick={handleLeftClick}
      />
      {pagesToShow.map((page) => (
        <PageItem
          key={page}
          page={page}
          isActive={page === activePage}
          onPageChange={handlePageChange}
        />
      ))}
      <EastIcon
        sx={{ ...arrowSx, marginLeft: '5px' }}
        onClick={handleRightClick}
      />
    </Row>
  );
}
