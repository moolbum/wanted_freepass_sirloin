import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  margin-right: 50px;
  padding: 30px 150px 30px 30px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  overflow: scroll;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.blue};
  border-radius: 15px;
`;

export const Delete = styled.button`
  border: none;
  color: ${({ theme }) => theme.blue};
`;
