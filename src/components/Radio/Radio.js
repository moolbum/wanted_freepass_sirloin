import React from 'react';
import * as S from './Radio.style';

const Radio = ({ name, value, onClick }) => {
  return (
    <S.Label name={name}>
      <S.Radio name={name} onClick={onClick} />
      <S.Text>{value}</S.Text>
    </S.Label>
  );
};

export default Radio;
