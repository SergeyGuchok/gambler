import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from 'components/Typography';
import CardNumber from 'components/CardNumber';
import Row from 'components/Row';
import CasinoImage from 'components/CasinoImage';
import Column from 'components/Column';
import {
  primaryWhite, navMenuItem, TYPE_PRIMARY, TYPE_SECONDARY,
} from 'constants/index';
import Button from 'components/Button';
import VerticalContent from './VerticalContent';
import HorizontalContent from './HorizontalContent';

const sxColumn = {
  padding: '30px',
  width: '100%',
  position: 'relative',
  boxShadow: '0px 25px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: '30px',
  backgroundColor: primaryWhite,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 0,
};

const sxRow = {
  backgroundColor: primaryWhite,
  justifyContent: 'space-between',
  position: 'relative',
  boxShadow: '0px 25px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: '30px',
  padding: '30px 30px 30px 110px',
  zIndex: 0,
};

const depositBenefitsButtonStyles = {
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  color: navMenuItem,
  '.dot-icon': {
    marginLeft: '5px',
    color: navMenuItem,
  },
};

export default function CasinoCard({
  type = 'vertical',
  pros = [],
  imageSrc = '',
  mainCategory = 'Crypto',
  payoutTime = [],
  refLink,
  winRate,
  paymentOptions = [],
  openModal,
  setModalData,
  index,
}) {
  const [flipped, setFlipped] = useState(false);
  const handleModalOpen = () => {
    setModalData();
    openModal();
  };

  const link = refLink.includes('https://') ? refLink : `https://${refLink}`;

  if (type === 'vertical') {
    return (
      <Column sx={sxColumn}>
        <CardNumber number={index} />
        <CasinoImage imageSrc={imageSrc} />
        <HorizontalContent
          flipped={flipped}
          payoutTime={payoutTime}
          mainCategory={mainCategory}
          paymentOptions={paymentOptions}
          pros={pros}
          winRate={winRate}
        />

        <Typography sx={{ marginBottom: '60px', marginTop: '5px', ...depositBenefitsButtonStyles }} onClick={() => setFlipped(!flipped)}>
          {flipped ? 'Show deposit options' : 'Show casino benefits'}
          <MoreHorizIcon className="dot-icon" />
        </Typography>
        <a style={{ width: '100%' }} href={link} target="_blank" rel="noreferrer"><Button type={TYPE_PRIMARY}>Play now</Button></a>
        <Button type={TYPE_SECONDARY} style={{ marginTop: '10px' }} onClick={handleModalOpen}>Read more</Button>
      </Column>
    );
  }

  return (
    <Row sx={sxRow}>
      <CardNumber number={index} />
      <CasinoImage isRow imageSrc={imageSrc} />
      <VerticalContent
        flipped={flipped}
        payoutTime={payoutTime}
        mainCategory={mainCategory}
        paymentOptions={paymentOptions}
        pros={pros}
        winRate={winRate}
      />

      <Column sx={{ width: '380px' }}>
        <Typography sx={{ justifyContent: 'center', marginBottom: '25px', ...depositBenefitsButtonStyles }} onClick={() => setFlipped(!flipped)}>
          {flipped ? 'Show deposit options' : 'Show casino benefits'}
          <MoreHorizIcon className="dot-icon" />
        </Typography>
        <a href={link} target="_blank" rel="noreferrer"><Button type={TYPE_PRIMARY}>Play now</Button></a>
        <Button type={TYPE_SECONDARY} style={{ marginTop: '10px' }} onClick={handleModalOpen}>Read more</Button>
      </Column>
    </Row>
  );
}
