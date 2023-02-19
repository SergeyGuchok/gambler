import React from 'react';
import Icon from 'components/common/Icon';
import { secondaryGrey } from 'constants/index';
import { Box } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const boxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  padding: '8px 4px',
  width: '100%',
  border: `1px solid ${secondaryGrey}`,
};

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
    <Box sx={boxStyles}>
      <Tooltip title={optionToTooltipMap[option]} aria-label="tooltip">
        <Box sx={{ display: 'flex', flex: '1' }}>
          <Icon name={option} sx={{ width: '100%' }} />
        </Box>
      </Tooltip>
    </Box>
  );
}

export default PaymentOption;
