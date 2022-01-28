import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import AddProduct from '../AddProduct/AddProduct';

function Main() {
  return (
    <Container>
      <Nav />
      <AddProduct />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;
