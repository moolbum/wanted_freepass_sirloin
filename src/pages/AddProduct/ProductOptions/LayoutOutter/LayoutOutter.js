import React from 'react';
import styled from 'styled-components';
import LayoutInner from './LayoutInner/LayoutInner';

function LayoutOutter({ countList, onRemove }) {
  return (
    <Wrap countList={countList}>
      {countList &&
        countList.map((item, i) => (
          <LayoutInner onRemove={onRemove} key={i}></LayoutInner>
        ))}
    </Wrap>
  );
}

export default LayoutOutter;

const Wrap = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;
