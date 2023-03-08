import React from 'react';
import { TYPE_PRIMARY, TYPE_SECONDARY, TYPE_AD } from 'constants/index';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import AdButton from './AdButton';

function Button({ type, children, ...props }) {
  switch (type) {
    case TYPE_PRIMARY:
      return <PrimaryButton {...props}>{children}</PrimaryButton>;

    case TYPE_SECONDARY:
      return <SecondaryButton {...props}>{children}</SecondaryButton>;

    case TYPE_AD:
      return <AdButton {...props}>{children}</AdButton>;

    default:
      return null;
  }
}

export default Button;
