import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NAV_LIST from './data';

function Nav() {
  return (
    <Container>
      <Logo>SIR.LOIN</Logo>
      {NAV_LIST.map(({ id, title, list }) => (
        <UnorderedList key={id} title={title}>
          {title}
          {[...Array(list.length)].map((idx, i) => (
            <List key={idx}>{list[i]}</List>
          ))}
        </UnorderedList>
      ))}
    </Container>
  );
}

export default Nav;

const Container = styled.div`
  width: 250px;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const UnorderedList = styled.ul`
  font-size: 16px;
`;

const List = styled.li`
  font-size: 16px;
`;
