import React from 'react';
import styled from 'styled-components';
import { primaryBlack, primaryWhite } from 'constants/index';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const StyledButton = styled.button`
  width: 100%;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${primaryWhite};
  border-radius: 10px;
  border: none;
  overflow: hidden;
  padding: 15px 0;
  font-size: 25px;
  
  .right-arrow {
    transform: translateX(5px);
    transition: 0.4s transform;
  }
  
  &:hover {
    cursor: pointer;
    &::before {
      opacity: 0;
    }
    
    .right-arrow {
      transform: translateX(15px);
    }
  }
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(300deg, rgba(255,0,0,1) 0%, rgba(250,0,255,1) 45.31%, rgba(255,194,43,1) 100%);
    z-index: -2;
    transition: 0.2s left linear;
    border-radius: 10px;
  }
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${primaryBlack};
    transition: 0.4s opacity;
  }
`;

function PrimaryButton({ children, ...props }) {
  return (
    <StyledButton {...props} variant="contained">
      {children}
      <ArrowRightAltIcon fontSize="large" className="right-arrow" />
    </StyledButton>
  );
}

export default PrimaryButton;
