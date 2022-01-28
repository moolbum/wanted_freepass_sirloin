import React from 'react';
import * as S from './Toggle.style';

function Toggle({ checked, onChange }) {
  return (
    <S.ToggleWrapper>
      <S.ToggleInput
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <S.ToggleLabel htmlFor="checkbox" />
    </S.ToggleWrapper>
  );
}

export default Toggle;
