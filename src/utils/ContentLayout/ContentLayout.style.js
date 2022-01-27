import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  font-size: 20px;
`;

export const CardInnerWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

export const CardTitle = styled.div`
  padding: 20px;
  font-weight: bold;
`;

export const CardContent = styled.div`
  display: flex;
`;

export const ContentTitleWrap = styled.div`
  width: 20%;
  background: #f5f5f5;
  border-right: 1px solid #ddd;
`;

export const ContentTitle = styled.div`
  margin: 20px;
`;

export const InnerContent = styled.div`
  width: 80%;
  margin: 20px;
`;
