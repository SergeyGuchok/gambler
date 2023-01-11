import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import styled from 'styled-components';
import { secondaryGrey } from 'constants/index';
import { Box } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 8px 0;
  width: 100%;
  border: 1px solid ${secondaryGrey}
`;

const optionToTooltipMap = {
  visa: 'Visa',
  skrill: 'Skrill',
  eth: 'Etherium',
  btc: 'Bitcoin',
  mastercard: 'Master Card',
  paypal: 'Paypal',
  ltc: 'Litecoin',
  bnb: 'Binance coin',
  nft: 'NFT',
  webmoney: 'Webmoney',
  usdc: 'USDC',
  'erc-20': 'ERC-20',
  xrp: 'Ripple',
  csgo: 'CSGO Skins',
  revolut: 'Revolut',
  skinpay: 'Skinpay',
};

function PaymentOption({ option }) {
  return (
    <StyledBox>
      <Tooltip title={optionToTooltipMap[option]}>
        <Box sx={{ display: 'flex', flex: '1' }}>
          <Icon name={option} sx={{ width: '100%' }} />
        </Box>
      </Tooltip>
    </StyledBox>
  );
}

PaymentOption.propTypes = {
  option: PropTypes.string.isRequired,
};

export default PaymentOption;
