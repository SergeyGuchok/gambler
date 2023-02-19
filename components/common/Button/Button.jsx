import React from 'react';
import { TYPE_PRIMARY, TYPE_SECONDARY } from 'constants/index';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function Button({ type, children, ...props }) {
  switch (type) {
    case TYPE_PRIMARY:
      return <PrimaryButton {...props}>{children}</PrimaryButton>;

    case TYPE_SECONDARY:
      return <SecondaryButton {...props}>{children}</SecondaryButton>;

    default:
      return null;
  }
}

export default Button;
