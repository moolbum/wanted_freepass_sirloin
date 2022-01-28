import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  position: relative;
  top: 0;
`;

export const NavWrap = styled.div`
  ${props => props.theme.flex('center', 'space-between')}
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 0;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  z-index: 100;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.h1`
  padding: 5px 50px;
  font-size: 20px;
  font-weight: 700;
`;
