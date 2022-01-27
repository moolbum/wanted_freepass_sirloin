import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  ${({ theme }) => theme.flex('row', 'center', 'center')};
  z-index: 0;
`;

export const CheckBox = styled.input`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 2em;

  z-index: 1;
`;
