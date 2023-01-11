import React from 'react';
import styled from 'styled-components';
import { primaryGrey } from 'constants/index';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 100%;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${primaryGrey};
  border: 1px solid ${primaryGrey};
  border-radius: 10px;
  padding: 15px 0;
  font-size: 25px;
  
  &:hover {
    cursor: pointer;
  }
`;

function SecondaryButton({ children, ...props }) {
  return (
    <StyledButton {...props} variant="contained">
      {children}
    </StyledButton>
  );
}

SecondaryButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SecondaryButton;
