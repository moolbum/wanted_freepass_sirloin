import React from 'react';
import styled from 'styled-components';

function ProductOptionsButton({
  children,
  color,
  borderColor,
  bgColor,
  align,
  ...props
}) {
  return (
    <Button
      color={color}
      borderColor={borderColor}
      bgColor={bgColor}
      align={align}
      {...props}
      onClick={() => {}}
    >
      {children}
    </Button>
  );
}

export default ProductOptionsButton;

const Button = styled.button`
  /* width: 100%; */
  padding: 6px 26px;
  color: ${props => props.color};
  font-size: 16px;
  line-height: 28px;
  border: 2px solid ${props => props.borderColor};
  background-color: ${props => props.bgColor};
  border-radius: 4px;
  cursor: pointer;
  z-index: 100;
`;
