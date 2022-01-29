import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Input = styled.input`
  padding: 10px 5px 10px 20px;
  font-size: 100%;
  border: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  justify-content: space-around;
`;

export const ImgWrapper = styled.div`
  width: 50px;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.gray};
`;
