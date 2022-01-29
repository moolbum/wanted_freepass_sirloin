import React from 'react';
import styled from 'styled-components';

function ProductOptionsButton({
  children,
  width,
  margin,
  color,
  borderColor,
  bgColor,
  align,
  onClick,
  ...props
}) {
  return (
    <Button
      width={width}
      margin={margin}
      color={color}
      borderColor={borderColor}
      bgColor={bgColor}
      align={align}
      {...props}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ProductOptionsButton;

const Button = styled.button`
  margin: ${props => props.margin};
  padding: 6px 26px;
  color: ${props => props.color};
  font-size: 16px;
  line-height: 28px;
  border: 2px solid ${props => props.borderColor};
  background-color: ${props => props.bgColor};
  width: ${props => props.width};
  border-radius: 4px;
  cursor: pointer;
  z-index: 100;
`;
