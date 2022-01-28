import React from 'react';
import * as S from './Toggle.style';

const Toggle = props => {
  const { isChecked, handleToggle } = props;

  return (
    <div>
      <S.CheckBoxWrapper>
        <S.CheckBox id="checkbox" type="checkbox" />
        <S.CheckBoxLabel htmlFor="checkbox" />
      </S.CheckBoxWrapper>
    </div>
  );
};

export default Toggle;
