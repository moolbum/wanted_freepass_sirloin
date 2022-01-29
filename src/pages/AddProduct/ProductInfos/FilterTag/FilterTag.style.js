import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 100%;
  border: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 80px;
  padding: 0 15px;
  margin-left: 20px;
  border: 1px solid ${({ theme }) => theme.gray};
  font-size: 100%;
`;
