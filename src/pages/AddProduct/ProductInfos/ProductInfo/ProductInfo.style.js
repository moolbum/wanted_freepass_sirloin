import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Input = styled.input`
  width: 800px;
  padding: 10px 5px 10px 20px;
  font-size: 100%;
  border: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  justify-content: space-around;
`;
