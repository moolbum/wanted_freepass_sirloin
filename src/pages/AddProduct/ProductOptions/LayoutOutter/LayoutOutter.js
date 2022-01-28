import React from 'react';
import styled from 'styled-components';
import LayoutInner from './LayoutInner/LayoutInner';

function LayoutOutter({ countList }) {
  return (
    <Wrap countList={countList}>
      {countList &&
        countList.map((item, i) => <LayoutInner key={i}></LayoutInner>)}
    </Wrap>
  );
}

export default LayoutOutter;

const Wrap = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;
