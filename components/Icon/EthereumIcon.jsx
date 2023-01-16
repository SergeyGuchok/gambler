import React from 'react';
import { SvgIcon } from '@mui/material';

function EthereumIcon(props) {
  return (
    <SvgIcon viewBox="0 0 48 48" width="34px" height="34px" {...props}>
      <path fill="#7880e7" d="M11,24L25,2l14,22l-14,8L11,24z" />
      <path fill="#5c64c7" d="M25,2l14,22l-14,8V2z" />
      <path fill="#7880e7" d="M11,27l14,8l14-8L25,46L11,27z" />
      <path
        fill="#5c64c7"
        d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"
      />
      <path fill="#2a3192" d="M25,18l14,6l-14,8V18z" />
    </SvgIcon>
  );
}

export default EthereumIcon;
