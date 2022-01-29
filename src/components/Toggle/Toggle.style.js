import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0 0 -20px;
`;

export const ToggleLabel = styled.label`
  width: 42px;
  height: 20px;
  border-radius: 15px;
  background: #aaa;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin: -3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const ToggleInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 20px;
  &:checked + ${ToggleLabel} {
    background-color: #0066cc4d;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      margin-left: 21px;
      transition: 0.2s;
      background-color: ${({ theme }) => theme.blue};
    }
  }
`;
