import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  font-size: 20px;
`;

export const CardTitle = styled.div`
  padding: 20px;
  font-weight: bold;
`;

export const CardContent = styled.div``;

export const CardTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: none;
  border: 1px solid ${({ theme }) => theme.gray};
`;

export const ContentWrapperBorder = styled.div`
  border-right: 1px solid ${({ theme }) => theme.gray};
  border-left: 1px solid ${({ theme }) => theme.gray};
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
`;

export const ContentTitleWrap = styled.div`
  width: 220px;
  background: #f5f5f5;
  border-right: 1px solid ${({ theme }) => theme.gray};
`;

export const ContentTitle = styled.div`
  margin: 20px;
`;

export const InnerContent = styled.div`
  margin: 20px;
`;

export const NoSubTitleWrap = styled.div`
  width: 100%;
  background: #f5f5f5;
`;

export const NoSubTitleContent = styled.div`
  padding: 50px;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 6px 26px;
  color: navy;
  font-size: 20px;
  line-height: 28px;
  border: 2px solid navy;
  border-radius: 4px;
  cursor: pointer;
  z-index: 100;
`;
