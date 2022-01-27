import React from 'react';
import * as S from './Radio.style';

const Radio = ({ name, value }) => {
  return (
    <S.Label name={name}>
      <S.Radio name={name} />
      <S.Text>{value}</S.Text>
    </S.Label>
  );
};

export default Radio;
