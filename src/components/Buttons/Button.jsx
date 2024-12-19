import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
background: none;
width: 32px;

`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;