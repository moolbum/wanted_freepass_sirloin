import React from 'react';
import * as S from './Radio.style';

const Radio = ({ name, value }) => {
  return (
    <S.Label name={name}>
      <S.Radio name={name} />
      {value}
    </S.Label>
  );
};

export default Radio;
