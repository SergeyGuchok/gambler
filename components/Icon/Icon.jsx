import React from 'react';
import PropTypes from 'prop-types';
import VisaIcon from './VisaIcon';
import EthereumIcon from './EthereumIcon';
import SkrillIcon from './SkrillIcon';
import BitcoinIcon from './BitcoinIcon';
import MasterCardIcon from './MasterCard';
import PaypalIcon from './Paypal';
import CrossIcon from './Cross';
import LitecoinIcon from './Litecoin';
import Logo from './Logo';
import BinanceIcon from './Binance';
import NftIcon from './Nft';
import Erc20Icon from './Erc20';
import WebmoneyIcon from './Webmoney';
import UsdcIcon from './Usdc';
import XrpIcon from './Xrp';
import CsgoIcon from './Csgo';
import RevolutIcon from './Revolut';
import SkinpayIcon from './Skinpay';

const icons = {
  visa: VisaIcon,
  skrill: SkrillIcon,
  eth: EthereumIcon,
  btc: BitcoinIcon,
  mastercard: MasterCardIcon,
  cross: CrossIcon,
  paypal: PaypalIcon,
  ltc: LitecoinIcon,
  bnb: BinanceIcon,
  nft: NftIcon,
  webmoney: WebmoneyIcon,
  usdc: UsdcIcon,
  'erc-20': Erc20Icon,
  xrp: XrpIcon,
  csgo: CsgoIcon,
  revolut: RevolutIcon,
  skinpay: SkinpayIcon,
  logo: Logo,
};

function Icon(props) {
  const { name, ...rest } = props;
  const IconComponent = icons[name];

  return IconComponent ? <IconComponent {...rest} /> : null;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
