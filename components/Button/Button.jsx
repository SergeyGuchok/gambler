import React from 'react';
import PropTypes from 'prop-types';
import { TYPE_PRIMARY, TYPE_SECONDARY } from 'constants';
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

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
