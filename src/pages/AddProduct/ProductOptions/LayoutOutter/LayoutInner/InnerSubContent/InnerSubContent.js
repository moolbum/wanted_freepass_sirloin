import React, { useState } from 'react';
import styled from 'styled-components';
import InnerContent from './InnerContent/InnerContent';

function InnerSubContent({ detailOptions }) {
  return (
    <Wrap detailOptions={detailOptions}>
      {detailOptions &&
        detailOptions.map((item, i) => <InnerContent key={i}></InnerContent>)}
    </Wrap>
  );
}

export default InnerSubContent;

const Wrap = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;
