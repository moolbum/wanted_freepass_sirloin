import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  font-size: 20px;
`;

export const CardInnerWrap = styled.div`
  /* border-bottom: 1px solid #ddd; */
`;

export const CardTitle = styled.div`
  margin: 20px;
  font-weight: bold;
`;

export const CardContent = styled.div``;

export const CardTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

export const ContentTitleWrap = styled.div`
  padding-right: 6%;
  background: #f5f5f5;
  border-right: 1px solid #ddd;
`;

export const ContentTitle = styled.div`
  margin: 20px;
`;

export const InnerContent = styled.div`
  margin: 20px;
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
