import React from 'react';
import * as S from './Radio.style';

const Radio = ({ name, value, onChange }) => {
  return (
    <S.Label name={name} onChange={onChange}>
      <S.Radio name={name} value={value} />
      <S.Text>{value}</S.Text>
    </S.Label>
  );
};

export default Radio;
